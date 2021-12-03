import { Component, OnInit } from '@angular/core';
import { Voyage } from 'src/app/Models/voyage';
import { VoyageService } from 'src/app/Services/voyage.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  lesVoyages:Voyage[]=[];
  constructor(private voyageService:VoyageService) { }
  
  ngOnInit(): void {
    this.voyageService.getVoyages()
     .subscribe (data => this.lesVoyages = data);
  }

}
