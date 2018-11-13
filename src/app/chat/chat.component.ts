import { Component, OnInit } from '@angular/core';
import { ChatService } from '../service/chat.service';
import * as io from 'socket.io-client';
import * as $ from 'jquery';
import { Message } from 'ng-chat';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chat:string = '';
   socket:SocketIOClient.Socket;
  constructor(private chatService:ChatService ) { 
    this.socket = io('http://localhost:3000');
  }

  ngOnInit() {

    
    // var socket = io();
    $(document).ready(function () {

      // for emoji
      // $('#text-custom-trigger').emojiPicker({
      //     width: '300px',
      //     height: '200px',
      //     button: false
      // });

      // $('#m').emojiPicker();

      // $('#input-custom-size').emojiPicker({
      //     width: '300px',
      //     height: '200px'
      // });

      // $('#input-left-position').emojiPicker({
      //     position: 'left'
      // });

      // $('#trigger').click(function (e) {
      //     e.preventDefault();
      //     $('#text-custom-trigger').emojiPicker('toggle');
      // });

      // validation
      $("#m").keyup(function () {
          debugger;
          if ($('#m').val() <= 0) {
              $('#b').prop('disabled', true);
          }
          else {
              $('#b').prop('disabled', false);
          }
      });

      // $("#m").keypress(function (e) {
      //     if (e.which !== 13) {
      //         typing = true; // we know the user is typing because they have pressed a key but not 'Enter'
      //         socket.emit("typing", true);
      //         clearTimeout(timeout);
      //         timeout = setTimeout(timeoutFunction, 1500);
      //     } else {
      //         clearTimeout(timeout); // no need to fire the timeoutFunction twice (as we do it on the next line)
      //         timeoutFunction(); // probably needs a better name but this will immediately send the necessary `socket.emit('typing', false)` when the enter key is pressed
      //     }
      // });

      // $('#form1').submit(function () {

      //  this.mes();
      // });
  });
  this.socket.on('chat message', function (msg) {
      $('#messages').append($('<li>').text(msg));
      $('#messages')[0].scrollTop = $('#messages')[0].scrollHeight;
      // window.scrollTo(0, document.getElementById("#messages").scrollHeight);
  });
  }

  mes(){
    alert(1);
    this.socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  }

  send(){
    this.chatService.chat(this.chat).subscribe(data=>{
      console.log(data)
    })
  }


}
