import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { EmailValidator, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Voyage } from 'src/app/Models/voyage';
import { VoyageService } from 'src/app/Services/voyage.service';
import { map } from 'rxjs/operators';
import { ReservationService } from 'src/app/Services/reservation.service';
import { MatAccordion } from '@angular/material/expansion';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-voyage',
  templateUrl: './voyage.component.html',
  styleUrls: ['./voyage.component.css']
})
export class VoyageComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  lesvoyages: Voyage[] = [];


  identifiant: number = 0;

  reservationForm: FormGroup = new FormGroup({});

  today = new Date();
  day = this.today.getDay();
  month = this.today.getMonth();
  year = this.today.getFullYear();


  constructor(private activatedRoute: ActivatedRoute, private voyageService: VoyageService,private reservationService:ReservationService, private fb: FormBuilder) { }

  get formArray(){
    return this.reservationForm.get('formArray') as FormArray; 
  }

  onSubmitForm() {
    this.reservationService.addReservation(this.reservationForm.value)
    .subscribe();
  }

  onReset() {
    this.reservationForm.reset({
      lastName: [''],
      firstName: [''],
      email: [''],
      phoneNumber: [],
      specDemand1: [false],
      specDemand2: [false],
      demand: [''],
      trip:[this.identifiant],
      state:['In Progress'],
      date:[new Date(this.year, this.month, this.day)]
    });
  }

  ngOnInit(): void {
    this.identifiant = this.activatedRoute.snapshot.params['idv'];
    this.voyageService.getVoyages().pipe(map(lesvoyages => lesvoyages.filter(voyage => voyage.id == this.identifiant)))
      .subscribe(data => this.lesvoyages = data);

    this.reservationForm = this.fb.group({
          lastName: [''],
          firstName: [''],
          email: ['',Validators.email],
          phoneNumber: [Validators.required,Validators.pattern("[0-9]{8}")],
          specDemand1: [false],
          specDemand2: [false],
          demand: [''],
          trip:[this.identifiant],
          state:['In Progress'],
          date:[new Date(this.year, this.month, this.day)]

    });
  }
 

}
