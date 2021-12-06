import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Voyage } from 'src/app/Models/voyage';
import { VoyageService } from 'src/app/Services/voyage.service';

@Component({
  selector: 'app-list-voyages',
  templateUrl: './list-voyages.component.html',
  styleUrls: ['./list-voyages.component.css']
})
export class ListVoyagesComponent implements OnInit {
 listVoyages:Voyage[]=[];
  constructor(private voyageService:VoyageService,) { }
  onChercher(chaine:string){
    this.listVoyages=this.listVoyages.filter(v=>v.libelle.toLowerCase().search(chaine.toLowerCase())>=0);
  }

  ngOnInit(): void {
    this.voyageService.getVoyages()
    .subscribe (data => this.listVoyages = data);
 
  }

}
