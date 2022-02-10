import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { SuccessPaymentComponent } from './wallet/success-payment/success-payment.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: MainComponent  
      },
      {
        path: 'u',
        component: MainComponent  
      },
      {
        path: 'w',
        component: WalletComponent  
      },
      {
        path: 'p',
        component: ProfileComponent  
      },
      {
        path: 'successPayment',
        component: SuccessPaymentComponent  
      },
      {
        path: '',
        redirectTo:'dashboard/u',
        pathMatch:'full'  
      }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
