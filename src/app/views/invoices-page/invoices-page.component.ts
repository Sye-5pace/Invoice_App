import { Component } from '@angular/core';
import { InvoiceSettingsComponent } from "../../components/invoice-settings/invoice-settings.component";
import { InvoiceListComponent } from "../../components/invoice-list/invoice-list.component";
import { InvoiceModalComponent } from "../../components/reusables/invoice-modal/invoice-modal.component";

@Component({
  selector: 'app-invoices-page',
  standalone: true,
  imports: [InvoiceSettingsComponent, InvoiceListComponent, InvoiceModalComponent],
  templateUrl: './invoices-page.component.html',
  styleUrl: './invoices-page.component.css'
})

export class InvoicesPageComponent {

  
}
