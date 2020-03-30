import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Favola } from 'src/app/models/favola.model';
import { AudioLibraryService } from 'src/app/services/audio-library.service';

@Component({
  selector: 'app-listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.scss']
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
