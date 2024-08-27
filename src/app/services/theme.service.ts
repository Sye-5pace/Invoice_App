import { Injectable } from '@angular/core';
import { ToggleService } from './toggle.service';
import { Store } from '@ngrx/store';
import { switchTheme } from '../store/theme/theme.actions';

@Injectable({
  providedIn: 'root'
})

export class ThemeService extends ToggleService {

  constructor(store: Store<any>){
    super(store);
  }

  toggle():void{
    this.store?.dispatch(switchTheme())
  }
}
