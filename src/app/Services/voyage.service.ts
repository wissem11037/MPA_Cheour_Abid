import { Injectable } from '@angular/core';
import { Séjour } from '../Models/séjour';
import { Voyage } from '../Models/voyage';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  private lesVoyages: Voyage[]=[
    new Voyage(
      "1",
      //pays destination
      "paris",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80",
      1500,
      //type d'offre (nouvel ou non)
      false,
      new Date(2021,12,17),
      new Date(2021,12,25),
      //declaration du tableau de destination
      [new Séjour(1,"Tunis-paris","test.jpg","bla bla bla"),
       new Séjour(2,"louvre","test.jpg","bla bla bla"),
       new Séjour(3,"tour eiffel","test.jpg","bla bla bla"),
       new Séjour(4,"Chateau de Versailles","test.jpg","bla bla bla"),
       new Séjour(5,"centre ville de paris","test.jpg","bla bla bla"),
       new Séjour(6,"Cathédrale Notre-Dame de Reims","test.jpg","bla bla bla"),
       new Séjour(7,"free day","test.jpg","bla bla bla"),
       new Séjour(8,"paris-Tunis","test.jpg","bla bla bla")],
       //declaration du tableau des ServicesNonInculs
      ["Le timbre de voyage",
      "l’assurance et les options",
      "PCR Covid-19 avant départ : 170 Dt / Avant retour : 35$"]),
    
    ]
    getVoyage(){
      return this.lesVoyages;
    }
    getVoyageByid(id:string){
      
    }
  constructor() { }
}
