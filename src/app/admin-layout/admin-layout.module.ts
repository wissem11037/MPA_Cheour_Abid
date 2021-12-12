import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AddVoyageComponent } from './add-voyage/add-voyage.component';
import { ModifyVoyageComponent } from './modify-voyage/modify-voyage.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationCardComponent } from './reservation-card/reservation-card.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminHomeComponent,
    AddVoyageComponent,
    ModifyVoyageComponent,
    ReservationComponent,
    ReservationCardComponent
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AdminLayoutModule { }
