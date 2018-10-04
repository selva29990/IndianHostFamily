import { Component, OnInit, Host } from '@angular/core';
import { Observable } from 'rxjs';
import { HostServiceService } from '../host-service.service';
import { AuthService } from '../../auth.service';
import { Http, Response} from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public loading: boolean = false;
  
  posts: Observable<Host[]>
  showSpinner: boolean = true;
  storeName: any;

  constructor(private hostService: HostServiceService, public auth: AuthService, private http: Http) { }

  ngOnInit() {
    this.posts= this.hostService.get3Posts();
    this.posts.subscribe(()=> this.showSpinner = false)
  }

  getAsainStoreData(){
    return this.http.get('../../../assets/Data/data.json')
  }
}
 