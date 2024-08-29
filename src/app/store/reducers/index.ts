import { ActionReducerMap } from '@ngrx/store';
import * as invoices from '../invoices/invoices.reducer';
import * as theme from '../theme/theme.reducer';

export interface AppState {
  invoices: invoices.InvoicesState;
  theme: theme.ITheme;
}

export const appReducers: ActionReducerMap<AppState> = {
  invoices: invoices.invoicesReducer,
  theme: theme.themeReducer,
};
