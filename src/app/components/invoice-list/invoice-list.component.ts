import { Component } from '@angular/core';
import { InvoiceOpsFacadeService } from '../../services/invoice-ops-facade.service';
import { IInvoice } from '../../invoices';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.css'
})

export class InvoiceListComponent {
  invoiceList$!: Observable<IInvoice[]>;
  constructor(private invoiceOps: InvoiceOpsFacadeService){}

  ngOnInit():void {
    this.invoiceOps.loadInvoices();
    this.invoiceList$ = this.invoiceOps.filteredInvoices$;
  }
}
