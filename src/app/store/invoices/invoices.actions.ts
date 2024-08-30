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

export const addInvoice = createAction(
  '[Invoice] Add Invoice'
  , props<{ invoice: IInvoice }>()
);

export const editInvoice = createAction(
  '[Invoice] Edit Invoice'
  , props<{ invoice: IInvoice }>()
);

export const deleteInvoice = createAction(
  '[Invoices] Delete Invoice'
  , props<{ id: string }>()
);
