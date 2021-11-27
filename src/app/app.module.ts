import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListVoyagesComponent } from './components/list-voyages/list-voyages.component';
import { ErreurComponent } from './components/erreur/erreur.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { VoyageComponent } from './components/voyage/voyage.component';
import { VoyageCardsComponent } from './components/voyage-cards/voyage-cards.component';
import { DateVoyagePipe } from './Pipes/date-voyage.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListVoyagesComponent,
    ErreurComponent,
    AboutUsComponent,
    AccueilComponent,
    VoyageComponent,
    VoyageCardsComponent,
    DateVoyagePipe
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
