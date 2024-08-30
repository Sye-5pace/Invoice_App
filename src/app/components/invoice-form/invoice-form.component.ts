import { Component, Input } from '@angular/core';
import { FormButtonComponent } from "../reusables/form-button/form-button.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, FormArray, Validators } from '@angular/forms';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { InvoiceOpsFacadeService } from '../../services/invoice-ops-facade.service';

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
  itemList:Array<{name:string , qty: number, price: number,}>= [];
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

  initializeForm(){
    this.invoiceForm = this.fb.group({
      billForm: this.fb.group({
        streetAddress: ['', Validators.required],
        city: ['', Validators.required],
        postCode: ['', Validators.required],
        country:['', Validators.required]
      }),
      billTo: this.fb.group({
        clientName:['',Validators.required],
        clientEmail:['', [Validators.required, Validators.email]],
        streetAddress:['', Validators.required],
        city: ['', Validators.required],
        postCode: ['', Validators.required],
        country:['', Validators.required]
      }),
      invoiceDate:['', Validators.required],
      termsPayment:['', Validators.required],
      projectDescription:['', Validators.required],
      termsOption: ['', Validators.required],
      selectedTerm: [''],
      items: this.fb.array([this.createItem()]),
    })
    this.invoiceFormList = this.invoiceForm.get('invoices') as FormArray
  }

  createItem(){
    return this.fb.group({
      name: ['', Validators.required],
      qty: [0, [Validators.required,Validators.pattern('^[0-9]*$')]],
      price: [0, [Validators.required, Validators.pattern('^[0-9]+(.[0-9]{1,2})?$')]],
    })
  }

  showTermsOption(){
    this.showTerms =!this.showTerms;
  }

  selectTerms(term: any){
    this.paymentTerm = term
    this.invoiceForm.get('selectedTerm')?.setValue(term)
  }


  discardTerms(){
    this.invoiceOps.discard()
  }

  addListItem():void{
    this.itemList.push({
      name: '', qty: 0, price: 0,

    });
  }

  removeListItem(index: number): void{
    this.itemList.splice(index, 1);
  }


}
