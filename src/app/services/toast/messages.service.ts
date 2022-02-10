import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages:any;

  constructor(private toastr: ToastrService) { }

  getMessages(){
    return this.messages
  }

  sendMessage(message:any){
   this.messages = message
  }
}
