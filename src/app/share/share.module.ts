import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from '../dashboard/transaction/transaction.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    TransactionComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports:[
    TransactionComponent
  ]
})
export class ShareModule { }
