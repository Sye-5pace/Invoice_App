import { map, Observable, of } from 'rxjs';
import { IInvoice } from './../invoices';
import { Injectable } from '@angular/core';
import { selectInvoices } from '../store/invoices/invoices.selectors';
import { InvoicesState } from '../store/invoices/invoices.reducer';
import { Store } from '@ngrx/store';
import { loadInvoices } from '../store/invoices/invoices.actions';

@Injectable({
  providedIn: 'root'
})

export class InvoiceOpsFacadeService {
  invoices$: Observable<IInvoice[]> = this.store.select(selectInvoices)
  filteredInvoices$: Observable<IInvoice[]> = of([])

  constructor(private store : Store<InvoicesState>) { }

  loadInvoices():void {
    this.store.dispatch(loadInvoices());
  }

  filterInvoices(statuses: string[]): void{
    if(statuses.length === 0){
      this.filteredInvoices$ = of([])
    }else {
      this.filteredInvoices$ = this.invoices$.pipe(
        map(
          invoices => invoices.filter(invoice =>
            statuses.includes(invoice.status)
          )
        )
      )
    }
  }

}
