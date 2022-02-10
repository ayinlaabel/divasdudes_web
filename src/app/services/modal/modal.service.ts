import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  isModals:boolean = this.closeModal();

  private modals: any[] = [];

    add(modal: any) {
        // add modal to array of active modals
        this.modals.push(modal);
    }

    remove(id: string) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x.id !== id);
    }

    open(id: string) {
        // open modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.open();
    }

    close(id: string) {
        // close modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.close();
    }
    
  constructor() { }

  openModal(isModal:any){
    
    this.isModals = isModal;

    return this.isModals;
  }

  closeModal() {
    // let model:boolean;
    // if(this.isModals === true){

    //   this.isModals = false
    //   model = this.isModals
    // }else{
    //   this.isModals = true
    // }
    
    console.log(this.isModals)
    return this.isModals
  }
}
