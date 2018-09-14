import { LoadingService } from './services/loading.service';
import { AccomodationDetailComponent } from './listing/accomodation-detail/accomodation-detail.component';
import { AccomodationListingComponent } from './listing/accomodation-listing/accomodation-listing.component';
import { HostRegisterComponent } from './listing/host-register/host-register.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './/material.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { RoutingModule } from './/routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import {FormsModule} from "@angular/forms";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { ListingModule } from './listing/listing.module';
import { AgmCoreModule } from '@agm/core';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ImageUploadModule } from "angular2-image-upload";
import { LoadingModule } from 'ngx-loading';
import { AdsenseModule } from 'ng2-adsense';


const routes: Routes = [
  { path: 'host-register', component: HostRegisterComponent },
  //{ path: 'accomodation-listing', component: AccomodationListingComponent },
  { path: 'accomodationlisting/:id', component: AccomodationDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: '', loadChildren: './listing/listing.module#ListingModule' }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HostRegisterComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    CoreModule,
    FormsModule,
    BrowserAnimationsModule,
    RoutingModule,
    LoadingModule,
    GooglePlaceModule,
    ListingModule,
    ImageUploadModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCxR0fF8mIWSSkYgy7Bga-24hLCwyymuJg'
    }),
    SharedModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, LoadingService],
  bootstrap: [AppComponent],
  schemas:      [CUSTOM_ELEMENTS_SCHEMA] 
})
export class AppModule { }
