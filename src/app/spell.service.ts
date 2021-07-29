import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Spell } from './spell';

@Injectable({
  providedIn: 'root'
})
export class SpellService {

  private spellsUrl = 'api/spells';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  /** GET spell by id. Will 404 if id not found */
  getSpell(id: number): Observable<Spell> {
    const url = `${this.spellsUrl}/${id}`;
    return this.http.get<Spell>(url);
  }

  /** PUT: update the spell on the server */
  updateSpell(spell: Spell): Observable<any> {
    return this.http.put(this.spellsUrl, spell, this.httpOptions);
  }

  getSpells(): Observable<Spell[]> {
    return this.http.get<Spell[]>(this.spellsUrl);
  }
}
