import { Component, OnInit } from '@angular/core';
import { AcceptCookieService } from 'src/app/services/accept-cookie.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(public cookies: AcceptCookieService) { }

  mailto = 'info@rodarialtelefono.it';

  ngOnInit(): void {
  }

}
