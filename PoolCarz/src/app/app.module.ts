import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule } from '@angular/forms';

import { BookRideComponent } from './book-ride/book-ride.component';

import { OfferRideComponent } from './offer-ride/offer-ride.component';
import { MouseMouseHoverDirectiveDirective } from './mouse-mouse-hover-directive.directive';
import { RideFilterPipePipe } from './ride-filter-pipe.pipe';

import { RideDetailsComponentComponent } from './ride-details-component/ride-details-component.component';
import { BookrideDirective } from './bookride.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookRideComponent,
    OfferRideComponent,
    MouseMouseHoverDirectiveDirective,
    RideFilterPipePipe,
    RideDetailsComponentComponent,
    BookrideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
