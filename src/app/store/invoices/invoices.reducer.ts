import { createReducer, on } from '@ngrx/store';
import { IInvoice,  invoiceAdapter } from './invoice.model'
import { loadInvoices, loadInvoicesSuccess, loadInvoicesFailure } from './invoices.actions';
import { EntityState } from '@ngrx/entity';

export interface InvoicesState extends EntityState<IInvoice> {
  loading: boolean;
  error: string | null;
}

export const initialState: InvoicesState = invoiceAdapter.getInitialState({
  loading: false,
  error: null,
});

export const reducer = createReducer(
  initialState,
);

export const invoicesReducer = createReducer(
  initialState,
  on(loadInvoices, (state) => ({ ...state, loading: true })),
  on(loadInvoicesSuccess, (state, { invoices }) =>
    invoiceAdapter.setAll(invoices, { ...state, loading: false, error: null })
  ),
  on(loadInvoicesFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
