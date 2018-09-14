import { AuthService } from '../auth.service';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccomodationDetailComponent } from './accomodation-detail/accomodation-detail.component';
import { AccomodationListingComponent } from './accomodation-listing/accomodation-listing.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AgmCoreModule } from '@agm/core';

const routes: Routes = [ 
  { path: 'home', component: HomeComponent },
  { path: 'accomodation-listing', component: AccomodationListingComponent },
   { path: 'accomodation-listing/:id', component: AccomodationDetailComponent }
]

@NgModule({
  imports: [
    CommonModule, 
    SharedModule, 
    AgmCoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent, AccomodationListingComponent, AccomodationDetailComponent, FooterComponent],
  providers: [AuthService]
})
export class ListingModule { }
