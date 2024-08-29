import { ActionReducerMap } from '@ngrx/store';
import * as invoices from '../invoices/invoices.reducer';
import * as theme from '../theme/theme.reducer';

export interface AppState {
  invoices: invoices.InvoiceState;
  theme: theme.ITheme;
}

export const appReducers: ActionReducerMap<AppState> = {
  invoices: invoices.invoiceReducer,
  theme: theme.themeReducer,
};
