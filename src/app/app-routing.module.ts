import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { ChatsComponent } from './components/chats/chats/chats.component';

const routes: Routes = [
  {path:'b', component: BoardComponent,}, // boards
  {path:'c', component: ChatsComponent}, // chats
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
