import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InvoiceState, selectAll } from './invoices.reducer';
import { selectInvoiceIdFromRoute } from '../router/router.selectors';

export const selectInvoiceState = createFeatureSelector<InvoiceState>('invoices');

export const selectAllInvoices = createSelector(
  selectInvoiceState,
  selectAll
);

export const selectInvoiceById = createSelector(
  selectAllInvoices,
  selectInvoiceIdFromRoute,
  (invoices, id) => invoices.find(invoice => invoice.id === id)
);


export const selectInvoicesLoading = createSelector(
  selectInvoiceState,
  (state: InvoiceState) => state.loading
);

export const selectInvoicesError = createSelector(
  selectInvoiceState,
  (state: InvoiceState) => state.error
);
