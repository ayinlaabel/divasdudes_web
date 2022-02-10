import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from 'src/app/services/modal/modal.service';
import { DueDateModalComponent } from './due-date-modal/due-date-modal.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  isModal: boolean = true;


  constructor(
    private modal: ModalService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  dueDate() {

    const modalRef = this.modalService.open(DueDateModalComponent)
    modalRef.componentInstance.userId = {}
    // let open = this.modal.closeModal()
    // if (this.isModal === open) {
    //   this.isModal = true;
    //   this.modal.openModal(this.isModal)
    // } else {

    //   this.isModal = false;
    //   this.modal.openModal(this.isModal)
    // }
  }

  message(){

  }

  broadcastMessage(){
    
  }

  ngOnDestory(){
    // this.modalService.remove(DueDateModalComponent)
  }

}
