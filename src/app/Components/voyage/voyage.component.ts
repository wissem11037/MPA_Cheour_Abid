import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-voyage',
  templateUrl: './voyage.component.html',
  styleUrls: ['./voyage.component.css']
})
export class VoyageComponent implements OnInit {
 

  constructor(private activatedRoute:ActivatedRoute) { }
  identifiant:number = 0;
  ngOnInit(): void {
    this.identifiant= this.activatedRoute.snapshot.params['idv'];
  }

}
