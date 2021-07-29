import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weapon } from './weapon';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  private weaponsUrl = 'api/weapons';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  /** GET weapon by id. Will 404 if id not found */
  getWeapon(id: number): Observable<Weapon> {
    const url = `${this.weaponsUrl}/${id}`;
    return this.http.get<Weapon>(url);
  }

  //=====================================
  /** PUT: update the weapon on the server */
  updateWeapon(weapon: Weapon): Observable<any> {
    return this.http.put(this.weaponsUrl, weapon, this.httpOptions);
  }
  //=======================================

  getWeapons(): Observable<Weapon[]> {
    return this.http.get<Weapon[]>(this.weaponsUrl);
  }
}
