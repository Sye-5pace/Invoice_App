import { Component } from '@angular/core';
import { InvoiceOpsFacadeService } from '../../services/invoice-ops-facade.service';
import { IInvoice } from '../../invoices';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.css'
})

export class InvoiceListComponent {
  invoiceList$!: Observable<IInvoice[]>;
  themeMode: boolean = false;
  invoicesLength: number = 0;

  constructor(private invoiceOps: InvoiceOpsFacadeService,
    private themeService: ThemeService
  ){}

  ngOnInit():void {
    this.invoiceOps.loadInvoices();
    this.invoiceList$ = this.invoiceOps.filteredInvoices$;
    this.invoiceList$.subscribe(invoices => this.invoicesLength = invoices.length);
    this.themeService.mode$?.subscribe(
      mode => this.themeMode = mode
    );
  }
}
