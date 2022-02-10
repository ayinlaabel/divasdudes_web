import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly root_url;

  constructor(private http: HttpClient) {
    this.root_url = environment.api_url
  }

  get(uri: string) {
    return this.http.get(`${this.root_url}/${uri}`);
  }

  post(uri: string, payload: Object) {
    return this.http.post(`${this.root_url}/${uri}`, payload);
  }

  patch(uri: string, payload: Object) {
    return this.http.patch(`${this.root_url}/${uri}`, payload);
  }

  put(uri: string, payload: Object) {
    return this.http.patch(`${this.root_url}/${uri}`, payload);
  }

  delete(uri: string) {
    return this.http.delete(`${this.root_url}/${uri}`);
  }

  login(email: string, password: string) {
    return this.http.post(`${this.root_url}/users/login`, {
      email,
      password
    }, {
      observe: 'response'
    })
  }

  pay(uri: string, rrr: Object) {
    return this.http.post(`${this.root_url}/${uri}`, rrr);
  }

  signup(firstName: string, lastName: string, email: string, password: string){
    return this.http.post(`${this.root_url}/users`, {
      firstName,
      lastName,
      email,
      password
    }, {
      observe: 'response'
    })
  }

  logout(){
    return this.http.get(`${this.root_url}/users/logout`)
  }

  payment(amount: any){
    return this.http.post(`${this.root_url}/payment`, {
      amount
    }, {
      observe: 'response'
    })
  }
}
