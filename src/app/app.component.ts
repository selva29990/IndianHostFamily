import { Component } from '@angular/core';
import { MatButtonModule, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IndianHostFamilyV3';

  constructor(public snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.open("Hey ! Whats up?", 'close', {
      duration: 5000
    }))
  }
  
}
