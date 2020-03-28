import { Component, OnInit } from '@angular/core';

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
