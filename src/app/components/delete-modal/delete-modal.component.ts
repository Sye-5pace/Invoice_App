import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ThemeService } from '../../services/theme.service';
import { FormButtonComponent } from "../reusables/form-button/form-button.component";
import { CommonModule } from '@angular/common';
import { InvoiceOpsFacadeService } from '../../services/invoice-ops-facade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  imports: [FormButtonComponent,CommonModule],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.css'
})

export class DeleteModalComponent {
  openModal: boolean = false;
  themeMode: boolean = false;
  selectedInvoiceId!: any;
  constructor(private modalService: ModalService,
    private themeService: ThemeService,
    private invoiceOps: InvoiceOpsFacadeService,
    private router: Router
  ){

  }

  ngOnInit(){
    this.modalService.openDeleteModal$.subscribe( modal =>
      this.openModal = modal
    )
    this.themeService.mode$?.subscribe( mode => this.themeMode = mode)
    this.invoiceOps.selectedInvoice$.subscribe(invoice => this.selectedInvoiceId = invoice?.id)
  }

  hideModal(){
    this.modalService.hideDeleteModal();
  }

  deleteInvoice(){
    this.invoiceOps.deleteInvoice(this.selectedInvoiceId);
    this.hideModal();
    this.router.navigate(['/'])
  }
}
