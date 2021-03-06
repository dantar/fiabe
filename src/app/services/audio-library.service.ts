import { Injectable } from '@angular/core';
import { Favola } from '../models/favola.model';
import { GamesCommonService } from './games-common.service';
import { HttpClient } from '@angular/common/http';
import { fallInAppear } from '../animations';

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
      let ghost: Favola = {
        id: null,
        titolo: null,
        audio: null,
        icon: "assets/ghost.png",
        image: null,
        hangar: false,
        alwayson: false,
        pubblicazione: null,
      };
      this.favole = favole.filter(f => f.pubblicazione === null || new Date(f.pubblicazione) <= new Date());
      let count = this.favole.length % 5;
      if (count > 0) {
        for (let index = 0; index < (5 - count); index++) {
          this.favole.push(ghost);
        }
      }
      this.favole.forEach(f=>this.fmap[f.id] = f);
      this.shuffle();
    });
  }

  shuffle() {
    this.dial = [];
    this.favole
    .filter(f => f.alwayson || (f.pubblicazione === this.fmtDate(new Date())))
    .map(f => JSON.parse(JSON.stringify(f)))
    .forEach(f => this.dial.push(f));
    let size = this.dial.length;
    for (let index = 0; index < (10 - size); index++) {
      this.dial.push(this.onemore());
    }
    this.games.shuffle(this.dial);
  }

  private fmtDate(d: Date): string {
    return [d.getFullYear(), this.pad(d.getMonth()+1), this.pad(d.getDate())].join('-');
  }
  private pad(s: number) {
    return (s < 10) ? '0' + s : s;
  }

  onemore(): Favola {
    const check = this.dial.map(e => JSON.stringify(e));
    if (this.more.length === 0) {
      this.more = JSON.parse(JSON.stringify(this.favole)).filter(e => e.id && !check.includes(JSON.stringify(e)));
      this.games.shuffle(this.more);
    }
    return this.more.pop();
  }

}
