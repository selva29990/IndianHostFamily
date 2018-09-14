import { Host } from './../../host';
import { HostServiceService } from './../host-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-accomodation-detail',
  templateUrl: './accomodation-detail.component.html',
  styleUrls: ['./accomodation-detail.component.css']
})
export class AccomodationDetailComponent implements OnInit {

  @Input() ippost: Host
 
  host: Host; 
  imagesList: any;
  editing: boolean = false;

  constructor(private route: ActivatedRoute, 
    private postService: HostServiceService,
    private router: Router,
    public auth: AuthService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    const id = this.route.snapshot.paramMap.get("id")
    return this.postService.getPostData(id).subscribe(
      data => (this.host = data)
    );
  }
}
