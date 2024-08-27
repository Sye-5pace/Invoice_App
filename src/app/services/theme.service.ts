import { Injectable } from '@angular/core';
import { ToggleService } from './toggle.service';
import { select, Store } from '@ngrx/store';
import { switchTheme } from '../store/theme/theme.actions';
import { ITheme } from '../store/theme/theme.reducer';
import { selectTheme } from '../store/theme/theme.selectors';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ThemeService extends ToggleService {
  mode$ = this.store?.select(selectTheme);

  constructor(store: Store<ITheme>){
    super(store);
  }

  toggle():void{
    this.store?.dispatch(switchTheme())
  }
}
