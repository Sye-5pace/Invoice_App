import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InvoiceState, selectAll } from './invoices.reducer';

export const selectInvoiceState = createFeatureSelector<InvoiceState>('invoices');

export const selectAllInvoices = createSelector(
  selectInvoiceState,
  selectAll
);

export const selectInvoicesLoading = createSelector(
  selectInvoiceState,
  (state: InvoiceState) => state.loading
);

export const selectInvoicesError = createSelector(
  selectInvoiceState,
  (state: InvoiceState) => state.error
);
