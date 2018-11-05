import { NgChatModule } from 'ng-chat';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ChatService } from './service/chat.service';
import { HttpModule } from '@angular/http';
import { ChatComponent } from './chat/chat.component';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'chat', component: ChatComponent , canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    NgChatModule,
    HttpClientModule,
    NgChatModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [ChatService ,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
