import { Component, OnInit, Host } from '@angular/core';
import { Observable } from 'rxjs';
import { HostServiceService } from '../host-service.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public loading: boolean = false;
  
  posts: Observable<Host[]>
  showSpinner: boolean = true;
 
  constructor(private hostService: HostServiceService, public auth: AuthService) { }

  ngOnInit() {
    this.posts= this.hostService.get3Posts();
    this.posts.subscribe(()=> this.showSpinner = false)
    console.log(this);
  }

}
 