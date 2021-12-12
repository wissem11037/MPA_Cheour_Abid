import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Reservation } from 'src/app/Models/reservation';
import { ReservationService } from 'src/app/Services/reservation.service';

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.css']
})
export class ReservationCardComponent implements OnInit {

  @Input('reservation') r: Reservation;
  @Output() supp=new EventEmitter<number>();
  lesreservations: Reservation[] = [];

  stateForm: FormGroup = new FormGroup({
    state:new FormControl()
  });
  
  constructor(private reservationService:ReservationService) { }

  onSupprimer(id: number){
    this.reservationService.deleteReservation(id).subscribe(()=>this.supp.emit(id));
  }

  ngOnInit(): void {
   
  }

}
