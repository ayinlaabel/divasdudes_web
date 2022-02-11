import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from '../dashboard/transaction/transaction.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    TransactionComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
    })
  ],
  exports:[
    TransactionComponent
  ]
})
export class ShareModule { }
