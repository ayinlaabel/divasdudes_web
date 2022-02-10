import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngb-modal';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './main/main.component';
import { WalletComponent } from './wallet/wallet.component';
import { ProfileComponent } from './profile/profile.component';
import { DepositModalComponent } from './wallet/deposit-modal/deposit-modal.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { SuccessPaymentComponent } from './wallet/success-payment/success-payment.component';
import { ShareModule } from '../share/share.module';
import { ProfileModalComponent } from './profile/profile-modal/profile-modal.component';


@NgModule({
  declarations: [
    NavbarComponent,
    DashboardComponent,
    MainComponent,
    WalletComponent,
    ProfileComponent,
    DepositModalComponent,
    SuccessPaymentComponent,
    ProfileModalComponent

  ],
  imports: [
    CommonModule,
    ShareModule,
    FormsModule,
    NgbModalModule,
    DashboardRoutingModule
  ],
  entryComponents: [
    DepositModalComponent
  ]
})
export class DashboardModule { }
