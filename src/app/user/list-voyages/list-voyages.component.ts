import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Voyage } from 'src/app/Models/voyage';
import { VoyageService } from 'src/app/Services/voyage.service';

@Component({
  selector: 'app-list-voyages',
  templateUrl: './list-voyages.component.html',
  styleUrls: ['./list-voyages.component.css']
})
export class ListVoyagesComponent implements OnInit {

  listVoyages: Voyage[] = [];

  listVoyagesRecherche: Voyage[] = [];

  constructor(private voyageService: VoyageService,) { }

  txtValue = 'Clear me';

  onChercher(chaine: string) {
    this.listVoyages = this.listVoyagesRecherche;
    this.listVoyages = this.listVoyages.filter(v => v.libelle.toLowerCase().search(chaine.toLowerCase()) >= 0);

  }
  onFilterDown() {
    this.listVoyages = this.listVoyages.sort((a, b) => b.prix - a.prix);

  }
  onFilterUp() {
    this.listVoyages = this.listVoyages.sort((a, b) => a.prix - b.prix);
  }


  ngOnInit(): void {
    this.voyageService.getVoyages()
      .subscribe(data => this.listVoyages = data);
    this.voyageService.getVoyages()
      .subscribe(data => this.listVoyagesRecherche = data);
  }

}
