import { Component, Input } from '@angular/core';
import { FormButtonComponent } from "../reusables/form-button/form-button.component";
import { ModalService } from '../../services/modal.service';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoice-form',
  standalone: true,
  imports: [FormButtonComponent,FormsModule,CommonModule],
  templateUrl: './invoice-form.component.html',
  styleUrl: './invoice-form.component.css'
})
export class InvoiceFormComponent {
  @Input() editMode:boolean = false;
  @Input() editInvoiceData: any;
  showTerms:boolean = false;
  paymentTerm:string = "Select payment terms";
  itemList:Array<{name:string , qty: number, price: number}>= [];
  themeMode: boolean= false

  constructor(private modalService: ModalService
    ,private themeService: ThemeService){}

  ngOnInit(){
    this.themeService.mode$?.subscribe(
      mode => this.themeMode = mode
    );
  }

  showTermsOption(){
    this.showTerms =!this.showTerms;
  }

  selectTerms(term: any){
    this.paymentTerm = term
  }

  // must go into invoice-form-ops
  discardTerms(){
    this.modalService.hideCreateModal()
  }

  addListItem():void{
    this.itemList.push({ name: '', qty: 0, price: 0 });
  }

  removeListItem(index: number): void{
    this.itemList.splice(index, 1);
  }


}
