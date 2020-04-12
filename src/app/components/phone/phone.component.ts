import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AudioLibraryService } from 'src/app/services/audio-library.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
  animations: [
    trigger('dissolve', [
      transition(':enter', [style({opacity: 0}), animate('1500ms', style({opacity: 1}))]),
      transition(':leave', [style({opacity: 1}), animate('1000ms', style({opacity: 0}))]),
    ]),
  ]
})
export class PhoneComponent implements OnInit {

  shown: boolean;

  days: number;
  next: number;

  constructor(private http: HttpClient, public router: Router, public library: AudioLibraryService) { }

  ngOnInit(): void {
    this.shown = true;
    this.http.get('assets/countdown.json').subscribe((countdown:any) => {
      this.days = this._numdays(new Date(countdown.data)) - this._numdays(new Date());
      this.next = countdown.favole;
    });
  }

  _numdays(d: Date): number {
    return Math.floor((d.getTime() / (24 * 60 * 60 * 1000)));
  }

  dissolved(event:any) {
    if (event.toState === 'void') {
      this.library.shuffle();
    }
    this.shown = true;
  }

}
