import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fallInAppear } from 'src/app/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('stream', [
      transition(':enter', [useAnimation(fallInAppear)]),
    ]),
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  readers: string[]

  mailto = 'info@rodarialtelefono.it';

  ngOnInit(): void {
    this.readers = [
      'Matteo Ambrosetti', 
      'Davide Bartaletti', 
      'Paolo Bonifati', 
      'Francesco Borsacchi', 
      'Ginevra Bruscino', 
      'Carla Buscemi', 
      'Eugenia Conti', 
      'Giulia Del Nista', 
      'Maria Falcone', 
      'Filippo Fredducci', 
      'Laura Lo Cascio', 
      'Ginevra Mangano', 
      'Cecilia Milocani', 
      'Vincenzo Mirra', 
      'Pierluigi Nieri', 
      'Maria Pacelli', 
      'Sara Pachetti', 
      'Cosimo Parlangeli', 
      'Eugenio Prina', 
      'Rosa Maria Rizzi', 
      'Cristiano Saggini', 
      'Laura Salvetti', 
      'Fabiola Santandrea', 
      'Marco Saracco', 
      'Daniele Tarini', 
      'Francesca Torelli', 
      'Paola Valenti',
    ];
  }

}
