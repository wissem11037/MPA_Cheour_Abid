import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Voyage } from 'src/app/Models/voyage';
import { VoyageService } from 'src/app/Services/voyage.service';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-voyage',
  templateUrl: './voyage.component.html',
  styleUrls: ['./voyage.component.css']
})
export class VoyageComponent implements OnInit {
  
  voyage: Voyage[] = [];
  identifiant: string = "";

  reservationForm:FormGroup = new FormGroup({});

  constructor(private activatedRoute: ActivatedRoute, private voyageService: VoyageService, private fb:FormBuilder) { }

  onSubmitForm(){

  }
  
  onReset(){
    this.reservationForm.reset({
      
    });
  }
  ngOnInit(): void {
    this.identifiant = this.activatedRoute.snapshot.params['idv'];
    this.voyage = this.voyageService.getVoyageById(this.identifiant);
    this.reservationForm = this.fb.group({
      lastName:[''],
      firstName:[''],
      email:[''],
      phoneNumber:[''],
      specDemand:[''],
      demand:['']
    });
  }

}
