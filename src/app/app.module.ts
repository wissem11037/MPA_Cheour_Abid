import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ListVoyagesComponent } from './components/list-voyages/list-voyages.component';
import { ErreurComponent } from './components/erreur/erreur.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { VoyageComponent } from './components/voyage/voyage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListVoyagesComponent,
    ErreurComponent,
    AboutUsComponent,
    AccueilComponent,
    VoyageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
