import { HostServiceService } from './host-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { Host } from '../host';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBar, ErrorStateMatcher } from '@angular/material';
import { Observable } from 'rxjs';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  @Input() post: Host
  editing: boolean = false;
  Imagelist: String[] = [];
  servicesProvided = new FormControl();
  id?: string;
  message: string;
  Title: String
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
  billInc: string[];
  lati: string;
  lngi: string;
  address: string;
  status: boolean;
   
  uploadPercent: Observable<number>;
  downloadUrl: Observable<string>;
  selected: string;
  
  constructor(private serv: HostServiceService, 
    private route: ActivatedRoute, 
    private router: Router,
    public auth: AuthService, 
    public snackBar: MatSnackBar) { 
    }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")
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
  
  handleAddressChange(event){
    const add = JSON.parse(JSON.stringify(event));
    this.address = add.formatted_address;
   }

  matcher = new MyErrorStateMatcher();

  delete() {
    const id = this.route.snapshot.paramMap.get("id")
    this.serv.delete(id)
    this.snackBar.open("Post deleted successfully!", 'close', {
      duration: 5000
    }); 
    this.router.navigate(["/"]);
  }

  update() {
    const formData = {
      message: this.post.message,
      Title: this.post.Title,
      Name: this.post.Name,
      email: this.post.email,
      PhoneNo: this.post.PhoneNo,
      roomType: this.post.roomType,
      mealType: this.post.mealType,
      peopleType: this.post.peopleType,
      tenantPref: this.post.tenantPref,
      rentAmount: this.post.rentAmount,
      foodInc: this.post.foodInc,
      billInc: this.post.billInc,
      address: this.post.address,
      status: this.post.status
    }

    this.serv.update(this.post.id, formData)
    this.editing = false;
  }
}
