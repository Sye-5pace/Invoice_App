import { createAction, props } from '@ngrx/store';
import { IInvoice } from './invoice.model';

export const loadInvoices = createAction('[Invoice] Load Invoices');
export const loadInvoicesSuccess = createAction(
  '[Invoice] Load Invoices Success',
  props<{ invoices: IInvoice[] }>()
);
export const loadInvoicesFailure = createAction(
  '[Invoice] Load Invoices Failure',
  props<{ error: any }>()
);
