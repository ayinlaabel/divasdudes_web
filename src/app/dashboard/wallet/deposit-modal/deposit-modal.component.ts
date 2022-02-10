import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ProfileService } from 'src/app/services/users/profile.service';
import { WebRequestService } from 'src/app/services/web-request/web-request.service';

@Component({
  selector: 'app-deposit-modal',
  templateUrl: './deposit-modal.component.html',
  styleUrls: ['./deposit-modal.component.scss']
})
export class DepositModalComponent implements OnInit {
  isModals:any ;

  email:any;

  amount = '';
  paymentTo: string= '';

  constructor(
    private profileService: ProfileService,
    private webServer: WebRequestService,
    private router: Router,
    private modal: ModalService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    
    this.isModals = this.modal.closeModal();
    this.profileService.getProfile().subscribe(
      (user)=>{
        let u = Object(user);
        this.email= u.email
      }
    )
  }

  topUp() {
    if(this.paymentTo === 'wallet'){
      this.profileService.payment(this.amount, this.email, this.paymentTo).subscribe(
        (res:any) => {
          console.log(res.authorization_url)
          // dataX = data.
          let url =  res.authorization_url
          // window.location.href = url;
          window.open(url, "_blank")
          // this.router.navigate([`${url}`]);
        }
      )
    }

    if(this.paymentTo === 'savings'){
      this.profileService.payment(this.amount, this.email, this.paymentTo).subscribe(
        (res:any) => {
          console.log(res.authorization_url)
          // dataX = data.
          let url =  res.authorization_url
          // window.location.href = url;
          window.open(url, "_blank")
          // this.router.navigate([`${url}`]);
        }
      )
    }
    
  }

  closeModal() {
    
    this.modalService.dismissAll(DepositModalComponent)
  }

}
