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
    lastName: '',
    email: '',
    password: ''
  }
  constructor(private authService: AuthService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  submitForm(): void {
    if(this.model.firstName === '' || this.model.lastName === '' || this.model.email === '' || this.model.password === ''){

      this.toastr.error("You need to fill all the fields.")

    }else if (this.model.password.length < 8) {
      console.log(this.model.password)
      this.toastr.error("Password must be 8 or more characters")
    } else {
      this.toastr.info("please wait while we process your registration, when we are done we will log you in")
      this.authService.signup(this.model).subscribe(
        (res: HttpResponse<any>) => {
          this.toastr.success('Login Successfully!')
          this.router.navigate(['/dashboard/u'])
        }
      )
    }
  }

}
