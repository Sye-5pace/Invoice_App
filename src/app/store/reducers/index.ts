import {  ActionReducerMap } from '@ngrx/store';
import * as theme from '../theme/theme.reducer'


export interface AppState {
  theme: theme.ITheme
}

export const appReducers: ActionReducerMap<AppState> = {
  theme: theme.themeReducer
};


