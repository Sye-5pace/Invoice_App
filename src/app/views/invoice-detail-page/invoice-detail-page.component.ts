import { Component } from '@angular/core';
import { InvoiceOpsFacadeService } from '../../services/invoice-ops-facade.service';
import { DetailComponent } from "../../components/invoice-detail/detail/detail.component";
import { DetailSettingsComponent } from "../../components/invoice-detail/detail-settings/detail-settings.component";
import { FormButtonComponent } from "../../components/reusables/form-button/form-button.component";
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { InvoiceModalComponent } from "../../components/reusables/invoice-modal/invoice-modal.component";
import { DeleteModalComponent } from "../../components/delete-modal/delete-modal.component";
import { Router } from '@angular/router';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-invoice-detail-page',
  standalone: true,
  imports: [DetailComponent, DetailSettingsComponent, FormButtonComponent, CommonModule, InvoiceModalComponent, DeleteModalComponent],
  templateUrl: './invoice-detail-page.component.html',
  styleUrl: './invoice-detail-page.component.css'
})

export class InvoiceDetailPageComponent {
  editInvoiceData!: any;
  themeMode : boolean = false;
  selectedInvoiceId!: any;
  constructor(private themeService: ThemeService,
    private invoiceOps: InvoiceOpsFacadeService,
    private modalService: ModalService,
  ){}

  ngOnInit(){
    this.themeService.mode$?.subscribe( mode => this.themeMode = mode );
    this.invoiceOps.selectedInvoice$.subscribe(
      invoice => {
        this.editInvoiceData = invoice
        console.log(invoice);
      }
    )
    this.invoiceOps.selectedInvoice$.subscribe(invoice => this.selectedInvoiceId = invoice?.id)
  }


  openDeleteModal(){
    this.modalService.showDeleteModal()
  }
}
