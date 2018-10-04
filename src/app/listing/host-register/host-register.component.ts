import { HostServiceService } from './../host-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar, ErrorStateMatcher } from '@angular/material';
import { AngularFireStorage } from 'angularfire2/storage';
import { Router } from '@angular/router';
import {FormControl, Validators, FormGroupDirective, NgForm} from '@angular/forms';
import { AuthService } from '../../auth.service';
import * as firebase from 'firebase';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-host-register',
  templateUrl: './host-register.component.html',
  styleUrls: ['./host-register.component.css']
})
export class HostRegisterComponent implements OnInit {

  Imagelist: String[] = [];
  servicesProvided = new FormControl();
  id?: string;
  message: string;
  Title: string
  image: any;
  Name: string;
  email: string;
  published: Date;
  PhoneNo: string;
  roomType: string;
  mealType: string;
  peopleType: string;
  tenantPref: string;
  rentAmount: string; 
  foodInc: string;
  status: Boolean = false;
  billInc: string[];
  lati: string;
  lngi: string;
  address: string;
   
  buttonText: string = "Create Post";
  uploadPercent: Observable<number>;
  downloadUrl: Observable<string>;
  selected: string;

  constructor(public auth: AuthService, private hostService: HostServiceService, 
        private storage: AngularFireStorage, public snackBar: MatSnackBar,
        private router: Router) {

         }
        
  ngOnInit() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.id = user.uid;
       } else {
        // No user is signed in.
      }
      });
    }

    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  
    numberOnly(event): boolean {
      const charCode = (event.which) ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
      }
      return true;
  
    }
    
    matcher = new MyErrorStateMatcher();

  createPost(){
    const data = {
      //id: this.id,
      authorId: this.auth.currentUserId,
      message: this.message,
      Title: this.Title,
      image: this.Imagelist,
      Name: this.Name,
      email: this.email,
      published: new Date(),
      PhoneNo: this.PhoneNo,
      roomType: this.roomType,
      mealType: this.mealType,
      peopleType: this.peopleType,
      tenantPref: this.tenantPref,
      rentAmount: this.rentAmount,
      foodInc: this.foodInc,
      billInc: this.billInc,
      lati: this.lati,
      lngi: this.lngi,
      address: this.address,
      status: this.status
    };
    this.hostService.create(data)
      this.message=''
      this.Title=''
      this.image=''
      this.Name=''      
      this.email=''
      //this.published=''
      this.PhoneNo=''
      this.roomType=''
      this.mealType=''
      this.peopleType=''
      this.tenantPref=''
      this.rentAmount=''
      this.foodInc=''
       this.lati=''
      this.lngi=''
      this.address=''
    this.buttonText = "Post Created!"
    //setTimeout(() => this.buttonText = "Create Post", 3000);
    this.snackBar.open("Post submitted successfully!!!", 'close', {
      duration: 5000
    });  
    this.router.navigate(["/home"]);   
  }

  uploadImage(event){
    const file = event.target.files[0]
    const path = `accomodation-listing/${file.name}`
    if(file.type.split('/')[0] !== 'image'){
      return alert('only image files')
    } else {
    const task = this.storage.upload(path, file).then(() => {
      const ref = this.storage.ref(path);
      const downloadUrl = ref.getDownloadURL().subscribe(url =>{
        })
      });     
    }
  }

  handleAddressChange(event){
   const add = JSON.parse(JSON.stringify(event));
   this.lati = add.geometry.location.lat;
   this.lngi = add.geometry.location.lng;
   this.address = add.formatted_address;
  }

  onUploadFinished(event){
    const file = event.file
    const fileName = file.name
    const path = `accomodation-listing/${fileName}`
    if(file.type.split('/')[0] !== 'image'){
      return alert('only image files')
    } else {
    const task = this.storage.upload(path, file).then(() => {
      const ref = this.storage.ref(path);
      const downloadUrl = ref.getDownloadURL().subscribe(url =>{
        this.Imagelist.push(url);
      })
      });     
    }
  }

  onRemoved(event){
    //console.log("Function onRemoved called")
  }

  onUploadStateChanged(event){
    //console.log("Function onUploadStateChanged called")
  }
  
}
