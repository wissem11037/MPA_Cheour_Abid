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
  constructor(private voyageService:VoyageService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
 this.listVoyages=this.voyageService.getVoyage();
  }

}
