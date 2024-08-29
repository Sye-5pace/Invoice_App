import { createAction, props } from '@ngrx/store';
import { IInvoice } from './invoice.model'

export const loadInvoices = createAction('[Invoices] Load Invoices');

export const loadInvoicesSuccess = createAction(
  '[Invoices] Load Invoices Success',
  props<{ invoices: IInvoice[] }>()
);

export const loadInvoicesFailure = createAction(
  '[Invoices] Load Invoices Failure',
  props<{ error: string }>()
);
