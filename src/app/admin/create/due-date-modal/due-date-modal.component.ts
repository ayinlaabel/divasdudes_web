import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-due-date-modal',
  templateUrl: './due-date-modal.component.html',
  styleUrls: ['./due-date-modal.component.scss']
})
export class DueDateModalComponent implements OnInit {
  isModals:any;
  date = '';
  time = '';
  constructor(
    private modal: ModalService,
    private modalService: NgbModal,
    private adminService: AdminService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  createDueDate() {
    // let date = new Date(this.date);
    // let time = date.getTime();
    // let getDate = date.getFullYear();
    // console.log(time, getDate)
    this.adminService.createPaymentDueDate(this.date).subscribe(
     ()=>{
       this.modalService.dismissAll(DueDateModalComponent)
       this.toastr.success('Due Date Created!')
    })
  }

  closeModal() {

    this.modalService.dismissAll(DueDateModalComponent)
    
    if(this.isModals === true){

      this.isModals = false;
      this.modal.openModal(this.isModals)
    }else{

      this.isModals = true;
      this.modal.openModal(this.isModals)
    }
  }

}
