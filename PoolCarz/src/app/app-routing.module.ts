import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookRideComponent } from './book-ride/book-ride.component';
import { LoginComponent } from './login/login.component';
import { OfferRideComponent } from './offer-ride/offer-ride.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'book-ride', component:BookRideComponent},
  {path:'offer-ride',component:OfferRideComponent},
  {path:'login',component:LoginComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
