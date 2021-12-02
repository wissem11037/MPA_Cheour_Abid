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
  random1:number=0;
  random2:number=0;
  random3:number=0;
  length:number=0;
  onVoyages(){
    this.router.navigate(['/list-Voyages']);
  }

  ngOnInit(): void {
    this.lesVoyages=this.voyageService.getVoyage();
    this.length=this.lesVoyages.length;
    this.random1=Math.floor(Math.random() * (this.lesVoyages.length ));
    this.random2=Math.floor(Math.random() * (this.lesVoyages.length ));
    this.random3=Math.floor(Math.random() * (this.lesVoyages.length ));
  }
 
}
