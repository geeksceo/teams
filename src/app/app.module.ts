import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

// import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { BoardComponent } from './components/board/board.component';
import { ListComponent } from './components/list/list.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { ChatsComponent } from './components/chats/chats/chats.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { MainComponent } from './components/main/main.component';
import { WorkManagmentComponent } from './components/work-managment/work-managment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BoardComponent,
    ListComponent,
    TicketComponent,
    ChatsComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    WorkManagmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    // BrowserAnimationsModule,
    // NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
