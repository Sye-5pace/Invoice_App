import { Component } from '@angular/core';
import { InvoiceOpsFacadeService } from '../../../services/invoice-ops-facade.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { IInvoice } from '../../../invoices';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})

export class DetailComponent {
  selectedInvoice$: Observable<IInvoice | undefined>;

  constructor(private invoiceOpsFacade: InvoiceOpsFacadeService) {
    this.selectedInvoice$ = this.invoiceOpsFacade.selectedInvoice$;
  }

  // ngOnInit(): void {
  //   this.invoiceOpsFacade.loadInvoices();
  // }
}
