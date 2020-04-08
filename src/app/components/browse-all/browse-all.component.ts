import { Component, OnInit } from '@angular/core';
import { AudioLibraryService } from 'src/app/services/audio-library.service';
import { Favola } from 'src/app/models/favola.model';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate, query, stagger, useAnimation } from '@angular/animations';
import { fallInAppear } from '../../animations';

@Component({
  selector: 'app-browse-all',
  templateUrl: './browse-all.component.html',
  styleUrls: ['./browse-all.component.scss'],
  animations: [
    trigger('stream', [
      transition(':enter', [useAnimation(fallInAppear)]),
    ]),
  ]
})
export class BrowseAllComponent implements OnInit {

  constructor(
    public router: Router,
    public library: AudioLibraryService
    ) { }

  favole: Favola[];

  ngOnInit(): void {
    this.favole = JSON.parse(JSON.stringify(this.library.favole));
  }

}
