import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Host } from '../host';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: any
  userEmail: any
  posts: Observable<Host[]>

  constructor(public auth: AuthService) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        this.userEmail = user.email
      } else {
        // No user is signed in.
      }
    });
  }

  signOut(){
    console.log("Sign out clicked ")
    this.auth.logout();
  }
  
}
