import { Component, Input } from '@angular/core';
import { ModalService } from '../../../services/modal.service';
import { InvoiceFormComponent } from "../../invoice-form/invoice-form.component";


@Component({
  selector: 'app-invoice-modal',
  standalone: true,
  imports: [InvoiceFormComponent],
  templateUrl: './invoice-modal.component.html',
  styleUrl: './invoice-modal.component.css'
})

export class InvoiceModalComponent {
  openModal:boolean = false;
  @Input() editInvoiceData: any;

  constructor(private modalService: ModalService){}

  ngOnInit():void{
    this.modalService.openCreateModal$.subscribe( modal =>
      this.openModal = modal
    )
    // this.modalService.openDeleteModal$.subscribe( modal =>
    //   this.openModal = modal
    // )
  }





  discardCreateModal():void{
    this.modalService.hideCreateModal()
  }
}
