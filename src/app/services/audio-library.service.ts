import { Injectable } from '@angular/core';
import { Favola } from '../models/favola.model';
import { GamesCommonService } from './games-common.service';
import favole from 'src/assets/favole.json';

@Injectable({
  providedIn: 'root'
})
export class AudioLibraryService {

  favole: Favola[] = favole;

  dial: Favola[];
  more: Favola[] = [];

  fmap: {[id:string]: Favola};

  constructor(private games: GamesCommonService) {
    this.fmap = {};
    this.favole.forEach(f=>this.fmap[f.id] = f);
    this.shuffle();
  }

  shuffle() {
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
