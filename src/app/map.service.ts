import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MapPoint } from './map-point';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private MapPointsUrl = 'api/mapSchema';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  /** GET MapPoint by id. Will 404 if id not found */
  getMapPoint(id: number): Observable<MapPoint> {
    const url = `${this.MapPointsUrl}/${id}`;
    return this.http.get<MapPoint>(url);
  }

  getMapPoints(): Observable<MapPoint[]> {
    return this.http.get<MapPoint[]>(this.MapPointsUrl);
  }
}
