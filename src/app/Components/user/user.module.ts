import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AboutUsComponent } from '../about-us/about-us.component';
import { AccueilComponent } from '../accueil/accueil.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ListVoyagesComponent } from '../list-voyages/list-voyages.component';
import { VoyageComponent } from '../voyage/voyage.component';
import { VoyageCardsComponent } from '../voyage-cards/voyage-cards.component';
import { UserdashboardComponent } from '../userdashboard/userdashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AboutUsComponent,
    AccueilComponent,
    FooterComponent,
    HeaderComponent,
    ListVoyagesComponent,
    VoyageComponent,
    VoyageCardsComponent,
    UserdashboardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
