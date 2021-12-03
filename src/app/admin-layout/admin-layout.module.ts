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


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminHomeComponent,
    AddVoyageComponent
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AdminLayoutModule { }
