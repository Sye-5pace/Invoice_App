import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { localStorageSync } from 'ngrx-store-localstorage';

import { routes } from './app.routes';
import { appReducers } from './store/reducers';
import { InvoicesEffects } from './store/invoices/invoices.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore } from '@ngrx/router-store';


export function localStorageSyncReducer(reducer: any): any {
  return localStorageSync({
    keys: ['invoices', 'theme', 'router'],
    rehydrate: true,
  })(reducer);
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideRouterStore(),
    provideStore(appReducers,{ metaReducers: [localStorageSyncReducer] }),
    provideHttpClient(),
    provideEffects([InvoicesEffects]),
    provideStoreDevtools({maxAge:25, logOnly: false})
  ],
};
