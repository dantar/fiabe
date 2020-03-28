import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clickButton(event) {
    let target = event.target || event.srcElement || event.currentTarget;
    console.log(event, this.router);
    this.router.navigate(['listen', 'favola-01.mpeg']);
  }

}
