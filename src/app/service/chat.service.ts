import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }


  getAccessToken() {
    return {
      headers: new HttpHeaders({
        'httpx-thetatech-accesstoken': localStorage.getItem('userToken'),
      })
    };
  }


  submitUrl = 'http://localhost:3000/data';
  chatUrl = 'http://localhost:3000/chat';

  login(nickname){
  
    const send = {
      nickname:nickname
    }
    console.log(send)
   return this.http.post(this.submitUrl,send);
  }

  chat(data){
    return this.http.post(this.chatUrl,data)
  }

  }
