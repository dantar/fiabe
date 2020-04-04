import { Component, OnInit } from '@angular/core';
import { AudioLibraryService } from 'src/app/services/audio-library.service';
import { Favola } from 'src/app/models/favola.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse-all',
  templateUrl: './browse-all.component.html',
  styleUrls: ['./browse-all.component.scss']
})
export class BrowseAllComponent implements OnInit {

  constructor(
    public router: Router,
    public library: AudioLibraryService
    ) { }

  favole: Favola[];

  ngOnInit(): void {
    this.favole = JSON.parse(JSON.stringify(this.library.favole));
    for (let index = 0; index < 10; index++) {
      this.favole = this.favole.concat(JSON.parse(JSON.stringify(this.library.favole)));
    }
  }

}
