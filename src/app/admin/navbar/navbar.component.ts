import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfileService } from 'src/app/services/users/profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user:any;
  open:boolean =  false;
  
  constructor(
      private authService: AuthService,
      private route: Router,
      private profileService: ProfileService
  ) { }

  ngOnInit(): void {

    this.profileService.getProfile().subscribe(
      (user)=>{
        this.user = user;
      }
    )
  }
  toggleSideBar() {
    
    const icons = document.querySelectorAll('.nav_link-icon');

    if(this.open === false){
      document.querySelector('.nav_side')?.classList.add('show')
      document.querySelector('.icon_btn')?.classList.add('show')
      document.querySelector('.fa-arrow-alt-circle-right')?.classList.add('show')

      icons.forEach((icon)=>{
        icon.classList.add('show')
      });

      
      //INITIALIZING STATE
      this.open = true
    }else{
      document.querySelector('.nav_side')?.classList.remove('show')
      document.querySelector('.icon_btn')?.classList.remove('show')
      document.querySelector('.fa-arrow-alt-circle-right')?.classList.remove('show')
     
      icons.forEach((icon)=>{
        icon.classList.remove('show')
      });

      //INITIALIZING STATE
      this.open = false;
    }
   
  }

  logout(){
    this.authService.logout();
  }
}
