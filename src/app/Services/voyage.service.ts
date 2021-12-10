import { Injectable } from '@angular/core';
import { Voyage } from '../Models/voyage';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const URL = 'http://localhost:3000/Voyages';
@Injectable({
  providedIn: 'root'
})
export class VoyageService {


  /*getVoyage(){
    return this.lesVoyages;
  }
  getVoyageById(id:string){
    return this.lesVoyages.filter(voyage =>voyage.id==id);  
  }*/

  constructor(private http: HttpClient) { }

  getVoyages(): Observable<Voyage[]> {
    return this.http.get<Voyage[]>(URL);
  }

  addVoyage(v: Voyage): Observable<Voyage> {
    return this.http.post<Voyage>(URL, v);
  }

  updateVoyage(id: number, v: Voyage): Observable<Voyage> {
    return this.http.put<Voyage>(URL + "/" + id, v);
  }

  deleteVoyage(id: number) {
    return this.http.delete(URL + "/" + id);
  }

}
