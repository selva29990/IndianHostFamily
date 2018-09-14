import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'reset-password', component: ResetPasswordComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes), SharedModule
  ],
  declarations: [SigninComponent, SignupComponent, ResetPasswordComponent]
})
export class AuthModule { }
