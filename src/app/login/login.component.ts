import { Component, OnInit } from '@angular/core';
import { ChatAdapter } from 'ng-chat';
import {ActivatedRoute, Router} from '@angular/router';
import { ChatService } from '../service/chat.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nickname:string = ''
  session:string = ''
  res:any = []

  constructor(
    private chatService:ChatService,
    private router: Router,

    ) { }

  ngOnInit() {
    this.session = JSON.parse(localStorage.getItem('nickname'));
    console.log(this.session);
    this.checkUserAccess()
  }

  checkUserAccess() {
    const nickname = sessionStorage.getItem('nickname');
    if (nickname) {
      if ( null === nickname) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/chat']);
      }
    }
  }


  login(){
    this.chatService.login(this.nickname).subscribe(res=>{
      this.res = res
      sessionStorage.setItem('nickname', this.res.data);
      this.checkUserAccess()
      this.router.navigate(['/chat'])
    })
  }
}
