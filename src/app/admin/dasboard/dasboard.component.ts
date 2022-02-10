import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/users/profile.service';

import { savings } from '../../services/account';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent implements OnInit {
  users:any;
  savings: any[] =[];
  wallet: any[] = [];
  // colorScheme = {
  //   legendPosition = "right",
  //   legendTitle = 'Savings'

  // }
  constructor(
              private profileService: ProfileService
  ) {
    Object.assign(this, { savings  })
   }

  ngOnInit(): void {
    this.profileService.getAllUsers().subscribe(
      (users)=>{
        this.users = users;
      }
    )
  }

}
