import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { loadInvoices, loadInvoicesSuccess, loadInvoicesFailure } from './invoices.actions';
import { FetchInvoicesService } from '../../services/fetch-invoices.service';

@Injectable()
export class InvoicesEffects {
  loadInvoices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadInvoices),
      switchMap(() =>
        this.invoicesFetch.fetchInvoice().pipe(
          map((invoices) => loadInvoicesSuccess({ invoices })),
          catchError((error) => of(loadInvoicesFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private invoicesFetch: FetchInvoicesService) {}
}
