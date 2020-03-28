import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneComponent } from './components/phone/phone.component';
import { ListenComponent } from './components/listen/listen.component';


const routes: Routes = [
  {path: '', component: PhoneComponent},
  {path: 'listen/:id', component: ListenComponent},
  {path: 'phone', component: PhoneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
