import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CreateComponent } from './create/create.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DasboardComponent
      },
      {
        path: 'dashboard',
        component: DasboardComponent
      },
      {

        path:'users',
        component: UsersComponent
      },
      
      {

        path:'c',
        component: CreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
