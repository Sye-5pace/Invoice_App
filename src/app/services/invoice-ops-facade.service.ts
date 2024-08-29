import { Observable } from 'rxjs';
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
  constructor(private store : Store<InvoicesState>) { }

  loadInvoices():void {
    this.store.dispatch(loadInvoices());
  }
}
