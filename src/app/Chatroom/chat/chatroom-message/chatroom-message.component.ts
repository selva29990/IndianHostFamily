import { Message } from './../Message';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chatroom-message',
  templateUrl: './chatroom-message.component.html',
  styleUrls: ['./chatroom-message.component.css']
})
export class ChatroomMessageComponent implements OnInit {

  @Input() message: Message;

  constructor() { }

  ngOnInit() {
  }

}
