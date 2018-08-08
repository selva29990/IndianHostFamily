import { NgModule } from '@angular/core';
import { MatButtonModule, MatSnackBarModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatSnackBarModule],
  exports: [MatButtonModule, MatIconModule, MatSnackBarModule]
})
export class MaterialModule { }
