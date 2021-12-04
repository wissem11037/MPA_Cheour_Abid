import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVoyageComponent } from './add-voyage/add-voyage.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ModifyVoyageComponent } from './modify-voyage/modify-voyage.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      {path:"home",component:AdminHomeComponent},
      { path: "home/:idv", component: ModifyVoyageComponent },
      {path:"add-voyage",component:AddVoyageComponent},
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
