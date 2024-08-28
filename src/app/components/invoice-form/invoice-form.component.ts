import { Component, Input } from '@angular/core';
import { FormButtonComponent } from "../reusables/form-button/form-button.component";
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-invoice-form',
  standalone: true,
  imports: [FormButtonComponent],
  templateUrl: './invoice-form.component.html',
  styleUrl: './invoice-form.component.css'
})
export class InvoiceFormComponent {

 constructor(private modalService: ModalService){}

  @Input() editMode:boolean = false;
  @Input() editInvoiceData: any;
  showTerms:boolean = false;
  paymentTerm:string = "Select payment terms";

  showTermsOption(){
    this.showTerms =!this.showTerms;
  }
  selectTerms(term: any){
    this.paymentTerm = term
  }
  discardTerms(){
    this.modalService.hideCreateModal()
  }
}
