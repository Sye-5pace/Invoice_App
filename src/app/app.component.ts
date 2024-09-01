import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { InvoicesPageComponent } from "./views/invoices-page/invoices-page.component";
import { ThemeService } from './services/theme.service';
// import anime from 'animejs/lib/anime.es.js';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, InvoicesPageComponent,CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Invoice-app';
  themeMode: boolean= false

  constructor(private themeService: ThemeService ){}

  ngOnInit(){
    this.themeService.mode$?.subscribe( mode => this.themeMode = mode );
  }

  ngAfterViewInit(){

  }

  getTheme(){
    if(this.themeMode){
      return 'bg-miragedeep text-[#fff]';
    }else{
      return 'bg-alabaster text-vulcan'
    }
  }
}
