import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import {MatSnackBar} from '@angular/material';
import { Observable } from 'rxjs';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string; 
  phoneNo: string;
}

@Injectable()
export class AuthService {

  user: any;
  authState: any = null;
 
  constructor(public afAuth: AngularFireAuth,
              private afs: AngularFirestore, 
              private router: Router, 
              public snackBar: MatSnackBar) {
    this.afAuth.authState.subscribe(data=> this.authState = data)
                }
   
 
  get authenticated(): boolean {
    return this.authState !== null
  } 

  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : null;
  }
  
  login(){
    this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider)
  }

  logout() {
    this.afAuth.auth.signOut()
    .then(() => this.snackBar.open("Sign out successful !", 'close', {
      duration: 5000
    }))
    this.router.navigate(['/'])
  }

  emailSignIn(email: string, password: string){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(() => this.snackBar.open("Sign in successful !", 'close', {
      duration: 5000
    })).then(() =>     this.router.navigate(['/']))
    .catch(error => this.snackBar.open(error.message, 'close', {
      duration: 5000
    }))
  } 

  emailSignUp(displayName: string, email: string, password: string){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(() =>
    this.snackBar.open("Sign up successful !", 'close', {
      duration: 5000
    })).then(() =>     this.router.navigate(['/'])).then(user =>this.afAuth.auth.currentUser.sendEmailVerification()).then(()=>       this.snackBar.open("We sent you the email for verification", 'close', {
      duration: 5000
    }))
    .catch(error => this.snackBar.open(error.message, 'close', {
      duration: 5000
    }))
  }

  resetPassword(email: string){
    return firebase.auth().sendPasswordResetEmail(email)
    .then(() => this.snackBar.open("Reset password email link sent successfully", 'close', {
      duration: 5000
    }))
    .catch(error =>this.snackBar.open(error.message, 'close', {
      duration: 5000
    }))
  }

  private updateUserData(user){
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`)
    const data: User = {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName,
      photoURL: user.photoURL,
      phoneNo: user.phoneNo
    }
    return userRef.set(data, {merge: true})
  }

  googleLogin(){
    this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider)
  }

  facebookLogin(){ 
    this.afAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider)
  }

}