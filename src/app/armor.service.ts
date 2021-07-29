import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Armor } from './armor';

@Injectable({
  providedIn: 'root'
})
export class ArmorService {

  private armorsUrl = 'api/armors';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  //============================
  /** GET armor by id. Will 404 if id not found */
  getArmor(id: number): Observable<Armor> {
    const url = `${this.armorsUrl}/${id}`;
    return this.http.get<Armor>(url);
  }
  //============================

  getArmors(): Observable<Armor[]> {
    return this.http.get<Armor[]>(this.armorsUrl);
  }

}
