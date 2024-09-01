import { Component } from '@angular/core';
import { ThemeSwitchComponent } from "../theme-switch/theme-switch.component";
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ThemeSwitchComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})


export class SidebarComponent {

  constructor( ){}

  ngAfterViewInit() {
    anime({
      targets:'#line',
      width:['0%', '100%'],
      easing:'easeInOutQuad',
      delay: 500,
      duration: 800
    })

    anime({
      targets:'#line-tab',
      height:['0%', '100%'],
      easing:'easeInOutQuad',
      delay: 500,
      duration: 800
    })

    anime({
      targets: '#logo',
      translateY: [-100,0],
      delay: 700,
      easing: 'easeOutQuad',
      opacity:[0,1]
    })
  }
}
