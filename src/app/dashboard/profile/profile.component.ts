import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';


import { ProfileService } from 'src/app/services/users/profile.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  profile:any;

  model:any = {
    firstName:'',
    lastName:'',
    dob:'',
    gender:'',
    email: '',
    paymentMethod:'',
  };

  constructor(
              private profileService: ProfileService,
              private router: Router,
              private toastr: ToastrService,
              private modalService: NgbModal
  ) { }

  ngOnInit(): void {

    this.profileService.getProfile().subscribe(
      (user) => {
        this.profile = user;

        this.model = {
          firstName : this.profile.firstName,
          lastName:this.profile.lastName,
          dob:this.profile.dob,
          email: this.profile.email,
          gender:this.profile.gender,
          paymentMethod:this.profile.paymentMethod,
        }
      }
    )

    let inputs = document.querySelectorAll('input');
    let selects = document.querySelectorAll('select');

    inputs.forEach(input => {
      
      input.setAttribute("disabled","disabled")
    });

    selects.forEach(select => {
      
      select.setAttribute("disabled","disabled")
    });
    
    document.querySelector('.update')?.setAttribute('disabled', 'disabled')
  }

  updateProfile() {
    // console.log(this.model)
    this.profileService.updateProfile(this.model)
    .subscribe(
      ()=>{
        this.toastr.success('Profile update')
        this.router.navigate(['/dashboard/p']);
      }
    )
  }

  editProfile(){
    let inputs = document.querySelectorAll('input');
    let selects = document.querySelectorAll('select');
    document.querySelector('.update')?.removeAttribute('disabled')

    inputs.forEach(input => {
      
      input.removeAttribute("disabled")
    });

    selects.forEach(select => {
      
      select.removeAttribute("disabled")
    });
  }

  profileMobile(){

  }

}
