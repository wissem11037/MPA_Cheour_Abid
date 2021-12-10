import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../Models/reservation';
const URL = 'http://localhost:3000/reservations';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  addReservation(r:Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(URL, r);
  }

  getReservation(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(URL);
  }
}
