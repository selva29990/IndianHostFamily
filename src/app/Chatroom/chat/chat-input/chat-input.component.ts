import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {

  public newMessage: string = ''

  constructor() { }

  ngOnInit() {
  }

  public submit(message: string): void {
    this.newMessage ='';
  }
}
