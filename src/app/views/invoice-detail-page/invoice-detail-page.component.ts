import { Component } from '@angular/core';
import { InvoiceOpsFacadeService } from '../../services/invoice-ops-facade.service';
import { DetailComponent } from "../../components/invoice-detail/detail/detail.component";
import { DetailSettingsComponent } from "../../components/invoice-detail/detail-settings/detail-settings.component";

@Component({
  selector: 'app-invoice-detail-page',
  standalone: true,
  imports: [DetailComponent, DetailSettingsComponent],
  templateUrl: './invoice-detail-page.component.html',
  styleUrl: './invoice-detail-page.component.css'
})

export class InvoiceDetailPageComponent {
  


}
