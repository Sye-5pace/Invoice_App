import { Component, Input } from '@angular/core';
import { FormButtonComponent } from "../reusables/form-button/form-button.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, FormArray, Validators, AbstractControl } from '@angular/forms';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { InvoiceOpsFacadeService } from '../../services/invoice-ops-facade.service';
import { IInvoice } from '../../invoices';

@Component({
  selector: 'app-invoice-form',
  standalone: true,
  imports: [FormButtonComponent,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './invoice-form.component.html',
  styleUrl: './invoice-form.component.css'
})
export class InvoiceFormComponent {
  @Input() editMode:boolean = false;
  @Input() editInvoiceData: any;
  showTerms:boolean = false;
  paymentTerm:string = "Select payment terms";
  // itemList:Array<{name:string , qty: number, price: number,}>= [];
  themeMode: boolean= false

  invoiceFormList!: FormArray;
  invoiceForm!: FormGroup;


  constructor(private themeService: ThemeService,
    private invoiceOps: InvoiceOpsFacadeService,
    private fb:FormBuilder){}

  ngOnInit(){
    this.themeService.mode$?.subscribe(
      mode => this.themeMode = mode
    );
    this.initializeForm();
  }

  initializeForm() {
    this.invoiceForm = this.fb.group({
      billForm: this.fb.group({
        streetAddress: ['', Validators.required],
        city: ['', Validators.required],
        postCode: ['', Validators.required],
        country: ['', Validators.required]
      }),
      billTo: this.fb.group({
        clientName: ['', Validators.required],
        clientEmail: ['', [Validators.required, Validators.email]],
        streetAddress: ['', Validators.required],
        city: ['', Validators.required],
        postCode: ['', Validators.required],
        country: ['', Validators.required]
      }),
      invoiceDate: ['', Validators.required],
      // termsPayment: ['', Validators.required],
      projectDescription: ['', Validators.required],
      selectedTerm: [''],
      paymentDue: [''],
      items: this.fb.array([]),
    });
    this.invoiceFormList = this.invoiceForm.get('items') as FormArray;
  }

  setupFormListeners() {
    this.invoiceForm.get('invoiceDate')?.valueChanges.subscribe(() => {
      this.updatePaymentDue();
    });

    this.invoiceForm.get('selectedTerm')?.valueChanges.subscribe(() => {
      this.updatePaymentDue();
    });
  }

  updatePaymentDue() {
    const invoiceDate = this.invoiceForm.get('invoiceDate')?.value;
    const selectedTerm = this.invoiceForm.get('selectedTerm')?.value;

    if (invoiceDate && selectedTerm) {
      const daysToAdd = parseInt(selectedTerm.split(' ')[1]);
      const paymentDue = new Date(invoiceDate);
      paymentDue.setDate(paymentDue.getDate() + daysToAdd);
      this.invoiceForm.get('paymentDue')?.setValue(paymentDue.toISOString().split('T')[0]);
    }
  }



  createItem(){
    return this.fb.group({
      name: ['', Validators.required],
      qty: ['', [Validators.required,Validators.pattern('^[0-9]*$')]],
      price: ['', [Validators.required, Validators.pattern('^[0-9]+(.[0-9]{1,2})?$')]],
      total: [{ value: '0.00', disabled: true }]
    })
  }

  showTermsOption(){
    this.showTerms =!this.showTerms;
  }

  selectTerms(term: any){
    this.paymentTerm = term
    this.invoiceForm.get('selectedTerm')?.setValue(term)
    this.updatePaymentDue();
  }


  discardTerms(){
    this.invoiceOps.discard()
  }

  addListItem():void{
    this.invoiceFormList.push(this.createItem());
  }

  get itemsFormArray(): FormArray{
    return this.invoiceForm.get('items') as FormArray;
  }

  removeListItem(index: number): void{
    (this.invoiceForm.get('items') as FormArray).removeAt(index);
  }

  saveSend(){
    // this.invoiceOps.addInvoice(this.prepareSaveInvoiceData());
    this.invoiceOps.discard();
    console.log(this.prepareSaveInvoiceData())
  }

  private prepareSaveInvoiceData(): IInvoice {
    return {
      id: this.editMode ? this.editInvoiceData.id : this.generateInvoiceId(),
      createdAt: new Date().toISOString().split('T')[0],
      paymentDue: this.invoiceForm.get('paymentDue')?.value,
      description: this.invoiceForm.get('projectDescription')?.value,
      paymentTerms: parseInt(this.invoiceForm.get('selectedTerm')?.value.split(' ')[1]),
      clientName: this.invoiceForm.get('billTo.clientName')?.value,
      clientEmail: this.invoiceForm.get('billTo.clientEmail')?.value,
      status: 'pending',
      senderAddress: this.invoiceForm.get('billForm')?.value,
      clientAddress: this.invoiceForm.get('billTo')?.value,
      items: this.invoiceForm.get('items')?.value,
      total: this.calculateTotal(this.invoiceForm.get('items')?.value)
    };
  }

  private calculateTotal(items: any[]): number {
    return items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  }

  private prepareDraftInvoice(){
    return {
      id: this.editMode? this.editInvoiceData.id : Date.now().toString(),
      createdAt: new Date().toISOString(),
      paymentDue: this.invoiceForm.get('invoiceData')?.value,
      description: this.invoiceForm.get('projectDescription')?.value,
      paymentTerms: parseInt(this.invoiceForm.get('selectedTerm')?.value),
      clientName: this.invoiceForm.get('billTo.clientName')?.value,
      clientEmail: this.invoiceForm.get('billTo.clientEmail')?.value,
      status: 'draft',
      senderAddress: this.invoiceForm.get('billForm')?.value,
      clientAddress: this.invoiceForm.get('billTo')?.value,
      items: this.invoiceForm.get('items')?.value,
      total: this.calculateTotal(this.invoiceForm.get('items')?.value)
    }
  }

  saveDraft(){
    this.discardTerms()
    console.log(this.prepareDraftInvoice())
    // this.invoiceOps.addInvoice(this.prepareDraftInvoice())
  }

  generateInvoiceId(){
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letterPart = letters.charAt(Math.floor(Math.random() * letters.length)) + letters.charAt(Math.floor(Math.random() * letters.length));
    const numberPart = Math.floor(1000 + Math.random() * 9000);
    return letterPart + numberPart;
  }

  calculateItemTotal(item: AbstractControl): string {
    if (item instanceof FormGroup) {
      const qty = item.get('qty')?.value || 0;
      const price = item.get('price')?.value || 0;
      return (qty * price).toFixed(2);
    }
    return '0.00';
  }

}
