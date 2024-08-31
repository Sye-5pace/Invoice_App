import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subject, takeUntil } from 'rxjs';
import anime from 'animejs/lib/anime.es.js';
import { InvoiceOpsFacadeService } from '../../services/invoice-ops-facade.service';
import { ThemeService } from '../../services/theme.service';
import { IInvoice } from '../../invoices';

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
  private unsubscribe$ = new Subject<void>();

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

  ngAfterViewInit() {
    this.invoiceList$.pipe(takeUntil(this.unsubscribe$)).subscribe((invoice) => {
      setTimeout(() => {
        const elements = document.querySelectorAll('section .invoice-card');
        if (elements.length > 0) {
          anime({
             targets:'section .invoice-card',
            translateX: [-400, 0],
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            delay: anime.stagger(300),
          });
        }
      }, 0);
    });

    anime({
      targets:'#empty img',
      
    })


  }
}
