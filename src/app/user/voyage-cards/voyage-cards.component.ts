import { Component, Input, OnInit } from '@angular/core';
import { Voyage } from 'src/app/Models/voyage';

@Component({
  selector: 'app-voyage-cards',
  templateUrl: './voyage-cards.component.html',
  styleUrls: ['./voyage-cards.component.css']
})
export class VoyageCardsComponent implements OnInit {
  @Input("voyageParent") v: Voyage;
  constructor() { }
  

  ngOnInit(): void {
  }

}
