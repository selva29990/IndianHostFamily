import { Observable } from 'rxjs';
import { SharedModule } from './../../shared/shared.module';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBar, ErrorStateMatcher} from '@angular/material';
import { AuthService } from '../../auth.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'] 
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  hide = true;
 
  constructor(
    public fb: FormBuilder, 
    private auth: AuthService, 
    private router: Router, 
    public snackBar: MatSnackBar
  ) { 
    this.signUpForm = this.fb.group({
      displayName: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: [
        '', [Validators.pattern('^(?=.*[0-9](?=.*[a-zA-Z])(a-zA-Z0-9)+)$'), 
            Validators.minLength(4)
          ]
      ]
    });
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  ngOnInit() {
  }

  get email() {
    return this.signUpForm.get('email')
  }

  get password(){
    return this.signUpForm.get('password')
  }

  get displayName(){ 
    return this.signUpForm.get('displayName');
  }

  signUp(){ 
    return this.auth.emailSignUp(this.displayName.value, this.email.value, this.password.value)
    .then(user=>{
      if(this.signUpForm.valid)[
        this.snackBar.open("We sent you the email for verification", 'close', {
          duration: 5000
        }),
        this.router.navigate(['/blog'])
      ]
    })
    .catch(error => {
      this.snackBar.open("Error occured, please try again.", 'close', {
        duration: 5000
      }); 
    })
  }
}
