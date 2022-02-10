import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { shareReplay, tap } from 'rxjs/operators'

import { WebRequestService } from '../web-request/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor(
    private webService: WebRequestService,
    private router: Router
  ) { }
  


  login(email: string, password: string) {
    return this.webService.login(email, password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        //the auth token will be in the header of this response
         this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
      })
    )
  }

  signup(model:any) {
    return this.webService.signup(model.firstName, model.lastName, model.email, model.password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        //the auth token will be in the header of this response
         this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
      })
    )
  }

  payment(amount:any) {
    return this.webService.payment(amount).pipe(
      shareReplay(),
      tap((res) => {
        //the auth token will be in the header of this response
        //  this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
        let url = res
        console.log(res)
        console.log(url)
      })
    )
  }

  logout() {
    // this.webService.logout();
    this.removeSession();
    this.router.navigate(['/login']);
  }
  
  getAccessToken(){
    return localStorage.getItem('x-access-token');
  }

  getRefreshToken(){
    return localStorage.getItem('x-refresh-token');
  }

  setAccessToken(accessToken: string) {
    localStorage.setItem('x-access-token', accessToken)
  }


  private setSession(userId: string, accessToken: any, refreshToken: any) {
    localStorage.setItem('user-id', userId);
    localStorage.setItem('x-access-token', accessToken);
    localStorage.setItem('x-refresh-token', refreshToken);
  }

  private removeSession() {
    localStorage.removeItem('userId');
    localStorage.removeItem('access-token');
    localStorage.removeItem('refresh-token');
  }
}
