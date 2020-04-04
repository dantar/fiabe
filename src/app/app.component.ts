import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fiabe';

  d:any;
  fullscreenEnabled: boolean;
  isFullscreen: boolean;

  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        gtag('config', 'G-KYH92BHQJ6', {'page_path': event.urlAfterRedirects});
      }
    })    
  }

  ngOnInit(): void {
    this.d = document;
    this.isFullscreen = false;
    if (this.d.fullscreenEnabled) {
      this.fullscreenEnabled = true;
    }
  }

  toggleFullScreen(event) {
    this.isFullscreen = !this.isFullscreen;
    if (this.isFullscreen) {
      this.d.documentElement.requestFullscreen();
    } else {
      this.d.exitFullscreen();
    }
  }
  
}
