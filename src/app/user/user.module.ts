import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListVoyagesComponent } from './list-voyages/list-voyages.component';
import { VoyageComponent } from './voyage/voyage.component';
import { VoyageCardsComponent } from './voyage-cards/voyage-cards.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { LoginComponent } from './login/login.component';
import { DescriptionTextPipe } from '../pipe/description-text.pipe';


@NgModule({
  declarations: [
    
    AboutUsComponent,
    AccueilComponent,
    FooterComponent,
    HeaderComponent,
    ListVoyagesComponent,
    VoyageComponent,
    VoyageCardsComponent,
    UserdashboardComponent,
    LoginComponent,
    DescriptionTextPipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
