import { Component } from '@angular/core';
import { FilterComponent } from "../filter/filter.component";
import { CreateInvoiceComponent } from "../create-invoice/create-invoice.component";

@Component({
  selector: 'app-invoice-settings',
  standalone: true,
  imports: [FilterComponent, CreateInvoiceComponent],
  templateUrl: './invoice-settings.component.html',
  styleUrl: './invoice-settings.component.css'
})

export class InvoiceSettingsComponent {

}
