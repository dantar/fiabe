import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Favola } from 'src/app/models/favola.model';
import { AudioLibraryService } from 'src/app/services/audio-library.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.scss'],
  animations: [
    trigger('dissolve', [
      state('invisible', style({opacity: 0})),
      state('visible', style({opacity: 1})),
      transition(':enter', [style({opacity: 0}), animate('2s', style({opacity: 1}))]),
      transition('invisible=>visible', [animate('100s')]),
      transition('visible=>invisible', [animate('10s')]),
    ]),
  ]
})
export class ListenComponent implements OnInit {

  favola: Favola;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private library: AudioLibraryService
    ) { }

  // Material Style Basic Audio Player Title and Audio URL
  msbapTitle = 'Audio Title';
  msbapAudioUrl = null;
  msaapDisplayVolumeControls = true;
  msbapDisplayTitle = false;
  
  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.favola = this.library.fmap[p['id']] || null;
      this.msbapAudioUrl = p['audio'];
      this.msbapTitle = this.favola.titolo;
    });
  }

  clickPhone(event) {
    this.router.navigate(['phone']);
  }
}
