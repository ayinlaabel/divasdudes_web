import { Injectable } from '@angular/core';
import { WebRequestService } from '../web-request/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = 'admin/'

  constructor(
      private webRequstService: WebRequestService
  ) { }

  createPaymentDueDate(date:any){

    return this.webRequstService.post(`${this.url}createPaymentDueDate`, {date});

  }
}
