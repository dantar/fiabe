import { Injectable } from '@angular/core';
import { Favola } from '../models/favola.model';
import { GamesCommonService } from './games-common.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AudioLibraryService {

  favole: Favola[];

  dial: Favola[];
  more: Favola[] = [];

  fmap: {[id:string]: Favola};

  constructor(private http: HttpClient, private games: GamesCommonService) {
    this.fmap = {};
    this.http.get<Favola[]>('assets/favole.json').subscribe(favole => {
      this.favole = favole;
      this.favole.forEach(f=>this.fmap[f.id] = f);
      this.shuffle();
    });
  }

  shuffle() {
    this.dial = [];
    for (let index = 0; index < 10; index++) {
      this.dial.push(this.onemore());
    }
  }

  onemore(): Favola {
    const check = this.dial.map(e => JSON.stringify(e));
    if (this.more.length === 0) {
      this.more = JSON.parse(JSON.stringify(this.favole)).filter(e => !check.includes(JSON.stringify(e)));
      this.games.shuffle(this.more);
    }
    return this.more.pop();
  }

}
