import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  secondSideBard: boolean = false;
  @Output() eventEmitter = new EventEmitter<boolean>();

  toggleSideBar() {
    this.eventEmitter.emit(this.secondSideBard = !this.secondSideBard);
   }


}
