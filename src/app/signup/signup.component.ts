import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  model = {
    firstName: '',
    lastName : '',
    email : '',
    password : ''
  }
  constructor( private authService: AuthService,
                private toastr: ToastrService,
                private router: Router) { }

  ngOnInit(): void {
  }

  submitForm():void{
    this.authService.signup(this.model).subscribe(
      (res: HttpResponse<any>) => {
        this.toastr.success('Login Successfully!')
        this.router.navigate(['/dashboard/u'])
      }
    )
  }

}
