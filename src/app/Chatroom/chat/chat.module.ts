 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat.component';
import { SharedModule } from '../../shared/shared.module';
import { ChatroomListComponent } from './chatroom-list/chatroom-list.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatroomTitleBarComponent } from './chatroom-title-bar/chatroom-title-bar.component';
import { ChatroomMessageComponent } from './chatroom-message/chatroom-message.component';
import { ChatroomWindowComponent } from './chatroom-window/chatroom-window.component';
    

const routes: Routes = [
  { path: 'chatroom', component: ChatComponent }
]

@NgModule({
  imports: [
      RouterModule.forChild(routes), SharedModule
    ],
  exports:[ChatroomListComponent, 
    ChatInputComponent,
    ChatroomTitleBarComponent,
    ChatroomMessageComponent],
    
    declarations: [ChatComponent, ChatroomListComponent, 
    ChatInputComponent,
    ChatroomTitleBarComponent,
    ChatroomMessageComponent,
    ChatroomWindowComponent]
})
export class ChatModule { }
