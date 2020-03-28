import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.scss']
})
export class ListenComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  // Material Style Basic Audio Player Title and Audio URL
  msbapTitle = 'Audio Title';
  msbapAudioUrl = null;
  msaapDisplayVolumeControls = true;
  msbapDisplayTitle = false;
  
  ngOnInit(): void {
    this.route.params.subscribe(p => {this.msbapAudioUrl = 'assets/'+p['id']});
  }

  clickPhone(event) {
    this.router.navigate(['phone']);
  }
}
