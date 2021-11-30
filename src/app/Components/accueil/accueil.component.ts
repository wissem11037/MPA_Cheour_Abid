import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Voyage } from 'src/app/Models/voyage';
import { VoyageService } from 'src/app/Services/voyage.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private router:Router,private voyageService:VoyageService) { }
  lesVoyages:Voyage[]=[];
  onVoyages(){
    this.router.navigate(['/list-Voyages']);
  }

  ngOnInit(): void {
    this.lesVoyages=this.voyageService.getVoyage();
  }
 
}
