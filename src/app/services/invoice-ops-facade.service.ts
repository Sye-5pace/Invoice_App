import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { IInvoice } from './../invoices';
import { InvoiceState } from '../store/invoices/invoices.reducer';
import { selectAllInvoices } from './../store/invoices/invoices.selectors';
import { loadInvoices } from '../store/invoices/invoices.actions';

@Injectable({
  providedIn: 'root'
})
export class InvoiceOpsFacadeService {
  private filtersSubject = new BehaviorSubject<{ [key: string]: boolean }>({
    Draft: false,
    Pending: false,
    Paid: false
  });

  invoices$ = this.store.select(selectAllInvoices);
  filters$ = this.filtersSubject.asObservable();

  filteredInvoices$: Observable<IInvoice[]> = combineLatest([this.invoices$, this.filters$]).pipe(
    map(([invoices, filters]) => {
      const activeFilters = Object.entries(filters)
        .filter(([_, isActive]) => isActive)
        .map(([status]) => status.toLowerCase());

      if (activeFilters.length === 0) {
        return [];
        // return invoices;
      }

      return invoices.filter(invoice =>
        activeFilters.includes(invoice.status.toLowerCase())
      );
    })
  );

  constructor(private store: Store<InvoiceState>) {}

  loadInvoices(): void {
    this.store.dispatch(loadInvoices());
  }

  updateFilters(newFilters: { [key: string]: boolean }): void {
    this.filtersSubject.next(newFilters);
  }
}
