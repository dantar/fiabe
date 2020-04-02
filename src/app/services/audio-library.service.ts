import { Injectable } from '@angular/core';
import { Favola } from '../models/favola.model';
import { GamesCommonService } from './games-common.service';

@Injectable({
  providedIn: 'root'
})
export class AudioLibraryService {

  favole: Favola[] = [
    { id: 'favola-01',
      titolo: 'L\'Apollonia della marmellata', 
      audio: 'assets/favola-01.mpeg',
      icon: 'assets/fiabe-01-sml.jpg',
      image: 'assets/fiabe-01-sml.jpg',
    },
    { id: 'favola-02',
      titolo: 'A toccare il naso del re', 
      audio: 'assets/favola-02.mpeg',
      icon: 'assets/fiabe-02-sml.jpg',
      image: 'assets/fiabe-02-sml.jpg',
    },
    { id: 'favola-03',
      titolo: 'Cucina spaziale', 
      audio: 'assets/favola-03.mpeg',
      icon: 'assets/fiabe-03-sml.jpg',
      image: 'assets/fiabe-03-sml.jpg',
    },
    { id: 'favola-04',
      titolo: 'Il palazzo di gelato', 
      audio: 'assets/favola-04.mpeg',
      icon: 'assets/fiabe-04-sml.jpg',
      image: 'assets/fiabe-04-sml.jpg',
    },
  ];

  dial: Favola[];
  more: Favola[] = [];

  fmap: {[id:string]: Favola};

  constructor(private games: GamesCommonService) {
    this.fmap = {};
    this.favole.forEach(f=>this.fmap[f.id] = f);
    this.dial = [];
    for (let index = 0; index < 10; index++) {
      this.dial.push(this.onemore());
    }
  }

  onemore(): Favola {
    if (this.more.length === 0) {
      this.more = JSON.parse(JSON.stringify(this.favole));
      this.games.shuffle(this.more);
    }
    return this.more.pop();
  }

}
