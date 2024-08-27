import { createReducer, on } from '@ngrx/store';
import { switchTheme } from './theme.actions';


export interface ITheme {
  darkMode: boolean;
}

const initialState: ITheme = {
  darkMode: localStorage.getItem('darkMode') === 'true' ? true : false
};


export const themeReducer = createReducer(
  initialState,
  on(switchTheme,(state)=>{
      const darkMode = !state.darkMode;
      localStorage.setItem('darkMode', `${darkMode}`);
      return {
        ...state,
        darkMode
      };
    }
  )
);

