import { Component } from '@angular/core';
import { InvoiceOpsFacadeService } from '../../services/invoice-ops-facade.service';
import { DetailComponent } from "../../components/invoice-detail/detail/detail.component";
import { DetailSettingsComponent } from "../../components/invoice-detail/detail-settings/detail-settings.component";
import { FormButtonComponent } from "../../components/reusables/form-button/form-button.component";
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { InvoiceModalComponent } from "../../components/reusables/invoice-modal/invoice-modal.component";

@Component({
  selector: 'app-invoice-detail-page',
  standalone: true,
  imports: [DetailComponent, DetailSettingsComponent, FormButtonComponent, CommonModule, InvoiceModalComponent],
  templateUrl: './invoice-detail-page.component.html',
  styleUrl: './invoice-detail-page.component.css'
})

export class InvoiceDetailPageComponent {
  themeMode : boolean = false;
  constructor(private themeService: ThemeService){}

  ngOnInit(){
    this.themeService.mode$?.subscribe( mode => this.themeMode = mode );
  }


}
