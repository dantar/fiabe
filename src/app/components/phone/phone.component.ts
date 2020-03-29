import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AudioLibraryService } from 'src/app/services/audio-library.service';
import { Favola } from 'src/app/models/favola.model';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {

  constructor(private router: Router, private library: AudioLibraryService) { }

  imghref: Favola[];

  ngOnInit(): void {
    this.imghref = [this.library.dial[0]];
  }

  clickDial(favola: Favola, event: any) {
    this.router.navigate(['listen', favola.id]);
  }

}
