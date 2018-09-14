import { LoadingService } from './services/loading.service';
import { Component } from '@angular/core';
import { MatButtonModule, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IndianHostFamily';
  public loading: boolean = false;

  constructor(public snackBar: MatSnackBar, private loadingService: LoadingService) {}

  openSnackBar() {
    this.snackBar.open("Hey ! Whats up?", 'close', {
      duration: 5000
    })
  }
  
}
