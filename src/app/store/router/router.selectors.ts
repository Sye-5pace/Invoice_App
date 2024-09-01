import { getRouterSelectors, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector } from "@ngrx/store";


export const selectRouterState = createFeatureSelector<RouterReducerState>('router')


const { selectRouteParams, selectRouteParam } = getRouterSelectors(selectRouterState);


export const selectInvoiceIdFromRoute = selectRouteParam('id')