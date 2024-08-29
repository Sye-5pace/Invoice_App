import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { IInvoice } from './../invoices';
import { InvoiceState } from '../store/invoices/invoices.reducer';
import { selectAllInvoices } from './../store/invoices/invoices.selectors';
import { loadInvoices } from '../store/invoices/invoices.actions';

@Injectable({
  providedIn: 'root'
})
export class InvoiceOpsFacadeService {
  invoices$: Observable<IInvoice[]> = this.store.select(selectAllInvoices);
  filteredInvoices$: Observable<IInvoice[]> = of([]);

  constructor(private store: Store<InvoiceState>) {
    this.filteredInvoices$ = combineLatest([
      this.store.select(selectAllInvoices),
      of({ Draft: false, Pending: false, Paid: false })
    ]).pipe(
      map(([invoices, filters]) => this.filterInvoices(invoices, filters))
    );
  }

  loadInvoices(): void {
    this.store.dispatch(loadInvoices());
  }

  applyFilters(filters: { [key: string]: boolean }): void {
    this.filteredInvoices$ = combineLatest([
      this.store.select(selectAllInvoices),
      of(filters)
    ]).pipe(
      map(([invoices, filters]) => this.filterInvoices(invoices, filters))
    );
  }

  private filterInvoices(invoices: IInvoice[], filters: { [key: string]: boolean }): IInvoice[] {
    if (!invoices) return [];
    const activeFilters = Object.keys(filters).filter(key => filters[key]);

    if (activeFilters.length === 0) return invoices;

    return invoices.filter(invoice => activeFilters.includes(invoice.status));
  }
}
