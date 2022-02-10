import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


import { AuthService } from '../services/auth/auth.service';
import { MessagesService } from '../services/toast/messages.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
              private authService: AuthService,
              private router: Router,
              private toastr: ToastrService,
              private messageService: MessagesService
  ) { }

  ngOnInit(): void {
  }

  onLogin(email: string, password: string):void{
    this.authService.login(email, password).subscribe(
      (res: HttpResponse<any>) => {
        this.toastr.success('Login Successfully!')
        this.router.navigate(['/dashboard/u'])
      }
    )
  }

}
