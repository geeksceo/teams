import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-work-managment',
  templateUrl: './work-managment.component.html',
  styleUrls: ['./work-managment.component.scss']
})
export class WorkManagmentComponent implements OnInit {

  user!: User;

  constructor(
    private mainService: MainService
  ) {}


  ngOnInit(): void {
    this.mainService.getUser().subscribe(res => {
      this.user = res
    });
    console.log(this.user);
  }

}
