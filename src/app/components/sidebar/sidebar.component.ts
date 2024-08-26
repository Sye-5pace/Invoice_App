import { Component } from '@angular/core';
import { ThemeSwitchComponent } from "../theme-switch/theme-switch.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ThemeSwitchComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
