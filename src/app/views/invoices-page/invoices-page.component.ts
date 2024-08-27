import { Component } from '@angular/core';
import { InvoiceSettingsComponent } from "../../components/invoice-settings/invoice-settings.component";
import { InvoiceListComponent } from "../../components/invoice-list/invoice-list.component";

@Component({
  selector: 'app-invoices-page',
  standalone: true,
  imports: [InvoiceSettingsComponent, InvoiceListComponent],
  templateUrl: './invoices-page.component.html',
  styleUrl: './invoices-page.component.css'
})
export class InvoicesPageComponent {

}
