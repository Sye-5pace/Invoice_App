import { ActionReducerMap } from '@ngrx/store';
import * as invoices from '../invoices/invoices.reducer';
import * as theme from '../theme/theme.reducer';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';

export interface AppState {
  invoices: invoices.InvoiceState;
  theme: theme.ITheme;
  router: RouterReducerState<any>; 
}

export const appReducers: ActionReducerMap<AppState> = {
  invoices: invoices.invoiceReducer,
  theme: theme.themeReducer,
  router: routerReducer,
};