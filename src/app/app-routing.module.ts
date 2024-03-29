import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { ChatsComponent } from './components/chats/chats/chats.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { MainComponent } from './components/main/main.component';
import { WorkManagmentComponent } from './components/work-managment/work-managment.component';

const routes: Routes = [
  {path: 'sign-in', component: LoginComponent},
  {path: 'sign-up', component: RegisterComponent},
  {path: '', redirectTo: '/b', pathMatch: 'full'},
  {path: 'login', redirectTo: '/sign-in', pathMatch: 'full'},
  {path: 'register', redirectTo: '/sign-up', pathMatch: 'full'},
  {
    path: '',
    component: MainComponent,
    // canActivate: [authGuard],
    children: [
      {path:'b', component: WorkManagmentComponent,}, // boards
      {path:'c', component: ChatsComponent}, // chats
    ]
  },


  // {path: '**', redirectTo: 'sign-up',: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
