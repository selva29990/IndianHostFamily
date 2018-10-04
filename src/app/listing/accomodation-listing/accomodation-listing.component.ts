import { HostServiceService } from './../host-service.service';
  import { Component, OnInit, Host } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth.service';
import * as firebase from 'firebase';
   
@Component({ 
  selector: 'app-accomodation-listing',
  templateUrl: './accomodation-listing.component.html', 
  styleUrls: ['./accomodation-listing.component.css']
})
export class AccomodationListingComponent implements OnInit {

  posts: Observable<Host[]>
  userEmail: any;

  constructor(private hostService: HostServiceService, public auth: AuthService) {
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        this.userEmail = user.email
      } else {
        // No user is signed in.
      }
    });
   }

  ngOnInit() {
    this.posts= this.hostService.getPosts();
  }

  delete(id: string){
    this.hostService.delete(id);
  }

}
