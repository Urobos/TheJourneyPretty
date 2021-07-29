import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const spells = [
      { id: 1, name: 'Fireball' , damage: 4, manaCost: 4},
      { id: 2, name: 'PowerWord:Die' , damage: 8, manaCost: 8},
      { id: 3, name: 'Splash' , damage: 0, manaCost: 5},
    ];
    const mapSchema = [
      { id: 1, node: 11, directions: 'S'},
      { id: 2, node: 12, directions: 'NS'},
      { id: 3, node: 13, directions: 'NE'},
      { id: 4, node: 16, directions: 'E'},
      { id: 5, node: 19, directions: 'E'},
      { id: 6, node: 23, directions: 'EW'},
      { id: 7, node: 25, directions: 'S'},
      { id: 8, node: 26, directions: 'NWS'},
      { id: 9, node: 27, directions: 'NES'},
      { id: 10, node: 28, directions: 'NS'},
      { id: 11, node: 29, directions: 'NEW'},
      { id: 12, node: 33, directions: 'EW'},
      { id: 13, node: 37, directions: 'EW'},
      { id: 14, node: 39, directions: 'W'},
      { id: 15, node: 43, directions: 'WS'},
      { id: 16, node: 44, directions: 'NE'},
      { id: 17, node: 46, directions: 'S'},
      { id: 18, node: 47, directions: 'NEWS'},
      { id: 19, node: 48, directions: 'N'},
      { id: 20, node: 54, directions: 'EW'},
      { id: 21, node: 57, directions: 'EW'},
      { id: 22, node: 64, directions: 'WS'},
      { id: 23, node: 65, directions: 'NE'},
      { id: 24, node: 67, directions: 'EW'},
      { id: 25, node: 68, directions: 'N'},
      { id: 26, node: 69, directions: 'N'},
      { id: 27, node: 75, directions: 'EWS'},
      { id: 28, node: 76, directions: 'NS'},
      { id: 29, node: 77, directions: 'NEW'},
      { id: 30, node: 81, directions: 'S'},
      { id: 31, node: 82, directions: 'NE'},
      { id: 32, node: 85, directions: 'EW'},
      { id: 33, node: 87, directions: 'WS'},
      { id: 34, node: 88, directions: 'NS'},
      { id: 35, node: 89, directions: 'NE'},
      { id: 36, node: 92, directions: 'WS'},
      { id: 37, node: 93, directions: 'NS'},
      { id: 38, node: 94, directions: 'NS'},
      { id: 39, node: 95, directions: 'NW'},
      { id: 40, node: 99, directions: 'W'},
    ];
    const weapons = [
      { name: 'rusty short sword', damage: 2}
    ];
    const armors = [
      { name: 'rusty iron chesplate', defense: 2},
      { name: 'rusty iron pauldrons', defense:1}
    ]
    return {spells,mapSchema,weapons,armors};
  }
}
