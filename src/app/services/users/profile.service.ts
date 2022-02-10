import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { param } from 'jquery';
import { WebRequestService } from '../web-request/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
              private webReqService: WebRequestService,
              private router: Router,
              private route: ActivatedRoute
  ) { }

  getProfile(){
    return this.webReqService.get('users/profile')
  }

  getAllUsers(){
    return this.webReqService.get('admin/users');
  }

  updateProfile(model:any){
    const firstName = model.firstName;
    const lastName = model.lastName;
    const dob = model.dob;
    const gender = model.gender;
    const paymentMethod = model.paymentMethod;
    // return console.log(model);
    return this.webReqService.patch('users/updateProfile', { firstName, lastName, dob, gender, paymentMethod })
  }

  payment(amount:any, email:any, paymentType:any ){
    
    return this.webReqService.post('payment', {amount, email, paymentType});
    
  }

  getSuccessPay(rrr: any){
    return this.webReqService.pay('payment/ref', {rrr}).subscribe(
      ()=> {
        return rrr;
      }
    )

    // console.log(ref)
    
  }

  getDueDate(){
    return this.webReqService.get('users/paymentDueDate')
  }
}
