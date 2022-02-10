import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { ShareModule } from '../share/share.module';
import { SettingsComponent } from './settings/settings.component';
import { CreateComponent } from './create/create.component';
import { DueDateModalComponent } from './create/due-date-modal/due-date-modal.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    DasboardComponent,
    NavbarComponent,
    UsersComponent,
    SettingsComponent,
    CreateComponent,
    DueDateModalComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    AdminRoutingModule,
    FormsModule,
    NgxChartsModule,
    NgbModalModule
  ]
})
export class AdminModule { }
