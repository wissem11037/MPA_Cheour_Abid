import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Voyage } from 'src/app/Models/voyage';
import { VoyageService } from 'src/app/Services/voyage.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  lesVoyages: Voyage[] = [];
  lesVoyagesFull: Voyage[] = [];
  constructor(private voyageService: VoyageService,private router:Router) { }


  onSupprimer(id: number) {
    this.voyageService.deleteVoyage(id)
    .subscribe();
    this.lesVoyages=this.lesVoyages.filter(v=>v.id!=id);
  }
  onChercher(chaine:string){
    this.lesVoyages=this.lesVoyagesFull;
    this.lesVoyages=this.lesVoyages.filter(v=>v.libelle.toLowerCase().search(chaine.toLowerCase())>=0);
  }
  ngOnInit(): void {
    this.voyageService.getVoyages()
      .subscribe(data => this.lesVoyages = data);
      this.voyageService.getVoyages()
      .subscribe(data => this.lesVoyagesFull = data);
  }
 
}
