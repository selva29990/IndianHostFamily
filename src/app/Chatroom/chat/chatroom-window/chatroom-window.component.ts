import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatroom-window',
  templateUrl: './chatroom-window.component.html',
  styleUrls: ['./chatroom-window.component.css']
})
export class ChatroomWindowComponent implements OnInit {

  constructor() { }

  public data = [{
    message: 'ehy',
    createdAt: new Date(),
    sender: {
      firstName: 'elva',
      lastName: 'Balaji',
      photoUrl: 'http://via.placeholder.com/150x150'
    }
  }, 
  {
    message: 'More than one module matches. Use skip-import option to skip importing the component into the closest module.',
    createdAt: new Date(),
    sender: {
      firstName: 'God',
      lastName: 'Balaji',
      photoUrl: 'http://via.placeholder.com/150x150'
    }
  }]
  ngOnInit() {
  }

}
