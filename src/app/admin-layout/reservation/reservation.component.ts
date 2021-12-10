import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/Models/reservation';
import { ReservationService } from 'src/app/Services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  lesreservations: Reservation[] = [];

  constructor(private reservationService:ReservationService) { }

  ngOnInit(): void {
    this.reservationService.getReservation()
    .subscribe(data => this.lesreservations = data);
  }

}
