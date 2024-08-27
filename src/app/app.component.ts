import { Component } from '@angular/core';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { InvoicesPageComponent } from "./views/invoices-page/invoices-page.component";
import { ThemeService } from './services/theme.service';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, InvoicesPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Invoice-app';
  themeMode!: boolean;

  constructor(private themeService: ThemeService ){}

  ngOnInit(){
    this.themeService.mode$?.subscribe( mode => this.themeMode = mode );
  }

  
}
