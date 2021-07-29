import { Component, OnInit } from '@angular/core';
import { Spell } from '../spell';
import { SpellService } from '../spell.service';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {

  spells: Spell[] = [];

  constructor(
    private spellService: SpellService
  ) { }

  ngOnInit() {
    this.getSpells();
  }

  getSpells(): void {
    this.spellService.getSpells()
      .subscribe(spells => this.spells = spells);
  }

}
