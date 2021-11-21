import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ErreurComponent } from './components/erreur/erreur.component';
import { ListVoyagesComponent } from './components/list-voyages/list-voyages.component';
import { VoyageComponent } from './components/voyage/voyage.component';

const routes: Routes = [
  {path:"accueil" ,component:AccueilComponent},
  {path:"list-Voyages" ,component:ListVoyagesComponent},
  {path:"list-Voyages/:idv",component:VoyageComponent},
  {path:"aboutus" ,component:AboutUsComponent},
  {path:"",redirectTo:"accueil",pathMatch:"full"},
  {path:"**" ,component:ErreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
