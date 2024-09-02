import { deleteInvoice, editInvoice } from './../store/invoices/invoices.actions';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { IInvoice } from './../invoices';
import { InvoiceState } from '../store/invoices/invoices.reducer';
import { selectAllInvoices, selectInvoiceById } from './../store/invoices/invoices.selectors';
import { addInvoice, loadInvoices } from '../store/invoices/invoices.actions';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root'
})

export class InvoiceOpsFacadeService {
  private filtersSubject = new BehaviorSubject<{ [key: string]: boolean }>({
    Draft: true,
    Pending: true,
    Paid: true
  });

  invoices$ = this.store.select(selectAllInvoices);
  selectedInvoice$: Observable<IInvoice | undefined> = this.store.select(selectInvoiceById)
  filters$ = this.filtersSubject.asObservable();

  filteredInvoices$: Observable<IInvoice[]> = combineLatest([this.invoices$, this.filters$]).pipe(
    map(([invoices, filters]) => {
      const activeFilters = Object.entries(filters)
        .filter(([_, isActive]) => isActive)
        .map(([status]) => status.toLowerCase());

      if (activeFilters.length === 0) {
        return [];
      }

      return invoices.filter(invoice =>
        activeFilters.includes(invoice.status.toLowerCase())
      );
    })
  );

  constructor(private store: Store<InvoiceState>, private modalService: ModalService) {
    this.invoices$.pipe(
      first(), 
      tap(invoices => {
        if (invoices.length === 0) {
          this.loadInvoices();
        }
      })
    ).subscribe();
  }

  loadInvoices(): void {
    this.store.dispatch(loadInvoices());
  }

  discard(){
    this.modalService.hideCreateModal()
  }

  addInvoice(invoice: IInvoice){
    this.store.dispatch(addInvoice({invoice}));
  }

  editInvoice(invoice: IInvoice){
    this.store.dispatch(editInvoice({invoice}));
  }

  deleteInvoice(id: string){
    this.store.dispatch(deleteInvoice({id}));
  }

  updateFilters(newFilters: { [key: string]: boolean }): void {
    this.filtersSubject.next(newFilters);
  }
}
