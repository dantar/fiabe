import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { PhoneComponent } from './components/phone/phone.component';
import { ListenComponent } from './components/listen/listen.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { GamesCommonService } from './services/games-common.service';
import { AudioLibraryService } from './services/audio-library.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowseAllComponent } from './components/browse-all/browse-all.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';


@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    ListenComponent,
    BrowseAllComponent,
    AboutComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxAudioPlayerModule,
    HttpClientModule
  ],
  providers: [
    GamesCommonService,
    AudioLibraryService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}, 
    HttpClient   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
