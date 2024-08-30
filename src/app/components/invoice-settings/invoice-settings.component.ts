import { Component } from '@angular/core';
import { FilterComponent } from "../filter/filter.component";
import { CreateInvoiceComponent } from "../create-invoice/create-invoice.component";
import { InvoiceOpsFacadeService } from '../../services/invoice-ops-facade.service';

@Component({
  selector: 'app-invoice-settings',
  standalone: true,
  imports: [FilterComponent, CreateInvoiceComponent],
  templateUrl: './invoice-settings.component.html',
  styleUrl: './invoice-settings.component.css'
})

export class InvoiceSettingsComponent {
  invoicesLength: number = 0;
  constructor(private invoicesOps: InvoiceOpsFacadeService){}

  ngOnInit(){
    this.invoicesOps.filteredInvoices$.subscribe( invoices =>  this.invoicesLength = invoices.length)
  }

}
