import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneComponent } from './components/phone/phone.component';
import { ListenComponent } from './components/listen/listen.component';
import { BrowseAllComponent } from './components/browse-all/browse-all.component';
import { AboutComponent } from './components/about/about.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';


const routes: Routes = [
  {path: '', component: PhoneComponent},
  {path: 'listen/:id', component: ListenComponent},
  {path: 'phone', component: PhoneComponent},
  {path: 'browse-all', component: BrowseAllComponent},
  {path: 'about', component: AboutComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
