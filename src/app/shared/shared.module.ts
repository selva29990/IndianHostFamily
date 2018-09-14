import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FromNowPipe } from './from-now.pipe';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, FromNowPipe,  MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [FromNowPipe]
})
export class SharedModule { }
