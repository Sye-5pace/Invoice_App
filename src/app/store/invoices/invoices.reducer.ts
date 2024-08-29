import { createReducer, on } from '@ngrx/store';
import { loadInvoices, loadInvoicesSuccess, loadInvoicesFailure } from './invoices.actions';
import { IInvoice } from './invoice.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface InvoiceState extends EntityState<IInvoice> {
  loading: boolean;
  error: string | null;
}

export const adapter: EntityAdapter<IInvoice> = createEntityAdapter<IInvoice>();

export const initialState: InvoiceState = adapter.getInitialState({
  loading: false,
  error: null,
});

export const invoiceReducer = createReducer(
  initialState,
  on(loadInvoices, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadInvoicesSuccess, (state, { invoices }) =>
    adapter.setAll(invoices, {
      ...state,
      loading: false,
      error: null,
    })
  ),
  on(loadInvoicesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export const { selectAll, selectEntities, selectIds, selectTotal } = adapter.getSelectors();
