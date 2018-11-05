import { Component, OnInit } from '@angular/core';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chat:string = ''
  constructor(private chatService:ChatService) { }

  ngOnInit() {

  }

  send(){
    this.chatService.chat(this.chat).subscribe(data=>{
      console.log(data)
    })
  }


}
