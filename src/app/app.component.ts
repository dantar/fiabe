import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AudioLibraryService } from './services/audio-library.service';
import { AcceptCookieService } from './services/accept-cookie.service';

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

  constructor(public router: Router, public library: AudioLibraryService, public cookies: AcceptCookieService) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        gtag('config', 'G-KYH92BHQJ6', {
          'page_path': event.urlAfterRedirects,
          'anonimize_ip': !this.cookies.accept
        });
        gtag('event', event.urlAfterRedirects.replace('/', ''), {'event_category': 'Navigation'});
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
