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
    trigger('appear', [
      transition(':enter', [style({opacity: 0}), animate('3s', style({opacity: 0})), animate('17s', style({opacity: 1}))]),
    ]),
    trigger('dissolve', [
      transition(':enter', [style({opacity: 1}), animate('3s', style({opacity: 1})), animate('10s', style({opacity: 0}))]),
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
