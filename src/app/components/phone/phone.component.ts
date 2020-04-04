import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AudioLibraryService } from 'src/app/services/audio-library.service';
import { Favola } from 'src/app/models/favola.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
  animations: [
    trigger('dialAppear', [
      state('invisibleDial', style({opacity: 0})),
      state('visibleDial', style({opacity: 1})),
      transition('invisibleDial=>visibleDial', [animate('1s')]),
      transition('visibleDial=>invisibleDial', [animate('1s')]),
    ]),
  ]
})
export class PhoneComponent implements OnInit {

  constructor(public router: Router, public library: AudioLibraryService) { }

  dialstate: string;

  imghref: Favola[];

  ngOnInit(): void {
    this.dialstate = 'visibleDial';
    this.imghref = this.library.dial;
  }

  clickDial(favola: Favola, event: any) {
    this.router.navigate(['listen', favola.id]);
  }

}
