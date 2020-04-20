import { Injectable } from '@angular/core';

declare let gtag;

@Injectable({
  providedIn: 'root'
})
export class AcceptCookieService {

  accept: boolean;
  stated: boolean;

  constructor() {
    this.stated = JSON.parse(localStorage.getItem('stated-cookies')) && true || false;
    this.accept = JSON.parse(localStorage.getItem('accept-cookies')) && true || false;
  }

  doAccept() {
    this.accept = true;
    this.stated = true;
    localStorage.setItem('accept-cookies', 'true');
    localStorage.setItem('stated-cookies', 'true');
  }

  doDeny() {
    this.accept = false;
    this.stated = true;
    localStorage.setItem('accept-cookies', 'false');
    localStorage.setItem('stated-cookies', 'true');
  }

}