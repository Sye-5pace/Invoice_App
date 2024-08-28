import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-invoice-modal',
  standalone: true,
  imports: [],
  templateUrl: './invoice-modal.component.html',
  styleUrl: './invoice-modal.component.css'
})

export class InvoiceModalComponent {
  open:boolean = false;

  constructor(private modalService: ModalService){}

  
}
