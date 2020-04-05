import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AudioLibraryService } from 'src/app/services/audio-library.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
  animations: [
    trigger('dissolve', [
      transition(':enter', [style({opacity: 0}), animate('500ms', style({opacity: 1}))]),
      transition(':leave', [style({opacity: 1}), animate('200ms', style({opacity: 0}))]),
    ]),
  ]
})
export class PhoneComponent implements OnInit {

  shown: boolean;

  constructor(public router: Router, public library: AudioLibraryService) { }

  ngOnInit(): void {
    this.shown = true;
  }

  dissolved(event:any) {
    console.log(event);
    if (event.toState === 'void') {
      this.library.shuffle();
    }
    this.shown = true;
  }

}
