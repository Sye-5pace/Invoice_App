import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-switch',
  standalone: true,
  imports: [],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.css'
})

export class ThemeSwitchComponent {
  themeMode!: boolean;

  constructor(private themeService: ThemeService ){}

  ngOnInit(){
    this.themeService.mode$?.subscribe( mode => this.themeMode = mode );
  }

  switchTheme() {
    this.themeService.toggle();
  }

  
}
