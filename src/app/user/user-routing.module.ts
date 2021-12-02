import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListVoyagesComponent } from './list-voyages/list-voyages.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { VoyageComponent } from './voyage/voyage.component';


const routes: Routes = [
  /** 

  */
 
  {
    
    path: '',
    component: UserdashboardComponent,
    children: [
      { path: "accueil", component: AccueilComponent },
      { path: "list-Voyages", component: ListVoyagesComponent },
      { path: "list-Voyages/:idv", component: VoyageComponent },
      { path: "aboutus", component: AboutUsComponent },
      { path: "login", component: LoginComponent },
      { path: '', redirectTo: '/user/accueil', pathMatch: 'full' }
    ]
    
  }
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
