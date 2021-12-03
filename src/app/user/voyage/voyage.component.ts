import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { Voyage } from 'src/app/Models/voyage';
import { VoyageService } from 'src/app/Services/voyage.service';
import{concatMap,filter,map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-voyage',
  templateUrl: './voyage.component.html',
  styleUrls: ['./voyage.component.css']
})
export class VoyageComponent implements OnInit {
  
  lesvoyages: Voyage[] = [];
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
    this.voyageService.getVoyages().pipe(map(lesvoyages=>lesvoyages.filter(voyage =>voyage.id==this.identifiant)))
    .subscribe (data => this.lesvoyages = data);

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
