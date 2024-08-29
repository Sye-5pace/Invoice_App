import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InvoicesState } from './invoices.reducer';
import { selectAll } from './invoice.model';

export const selectInvoicesState = createFeatureSelector<InvoicesState>('invoices');

export const selectInvoices = createSelector(
  selectInvoicesState,
  selectAll
);

export const selectInvoicesLoading = createSelector(
  selectInvoicesState,
  (state) => state.loading
);

export const selectInvoicesError = createSelector(
  selectInvoicesState,
  (state) => state.error
);
