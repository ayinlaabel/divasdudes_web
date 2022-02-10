import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/users/profile.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:any;
  constructor(
              private profileService: ProfileService 
  ) { }

  ngOnInit(): void {
    this.profileService.getAllUsers().subscribe(
      (users)=>{
        this.users = users
      }
    )
  }

}
