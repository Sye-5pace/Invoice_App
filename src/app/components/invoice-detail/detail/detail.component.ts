import { Component } from '@angular/core';
import { InvoiceOpsFacadeService } from '../../../services/invoice-ops-facade.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { IInvoice } from '../../../invoices';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})

export class DetailComponent {
  selectedInvoice$: Observable<IInvoice | undefined>;
  themeMode: boolean = false;
street: any;
  constructor(private invoiceOpsFacade: InvoiceOpsFacadeService,
    private themeService: ThemeService
  ) {
    this.selectedInvoice$ = this.invoiceOpsFacade.selectedInvoice$;
  }

  ngOnInit(): void {
    this.themeService.mode$?.subscribe(mode => this.themeMode = mode);
    this.invoiceOpsFacade.loadInvoices();
  }
}
