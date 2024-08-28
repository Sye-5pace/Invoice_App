import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-create-invoice',
  standalone: true,
  imports: [],
  templateUrl: './create-invoice.component.html',
  styleUrl: './create-invoice.component.css'
})

export class CreateInvoiceComponent {

  constructor(private modalService: ModalService){}

  toggleCreateModal():void{
    this.modalService.toggle();
  }

}
