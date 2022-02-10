import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { ModalManager } from 'ngb-modal';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ProfileService } from 'src/app/services/users/profile.service';
import { WalletService } from 'src/app/services/users/wallet.service';
import { DepositModalComponent } from './deposit-modal/deposit-modal.component';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  data: any;
  balance = 0;
  date: any;
  time: any;
  wallet:any;

  isModal = this.modal.closeModal();



  constructor(
    private modalService: NgbModal,
    private profileService: ProfileService,
    private modal: ModalService,
    private walletService: WalletService
  ) { }

  ngOnInit(): void {
    // const options = { year: 'numeric', month: 'long', day: 'numeric' }
    this.balance;
    this.date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
      return this.time
    }, 1000);

    this.walletService.getWallet().subscribe(
      (wallet)=>{
        this.wallet = wallet
        this.balance = this.wallet.balance
      }
    );

    this.isModal = this.modal.closeModal();

  }

  openDeposit() {
    const modalRef = this.modalService.open(DepositModalComponent)
    // modalRef.componentInstance.userId = {}
    // let open = this.modal.closeModal()
    // if(this.isModal === open){
    //   this.isModal = true;
    //   this.modal.openModal(this.isModal)
    // }else{
      
    //   this.isModal = false;
    //   this.modal.openModal(this.isModal)
    // }
      
  }

}
