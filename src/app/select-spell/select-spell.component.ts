import { Component, OnInit } from '@angular/core';
import { BatlleManagerService } from '../batlle-manager.service';
import { Spell } from '../spell';
import { SpellService } from '../spell.service';

@Component({
  selector: 'app-select-spell',
  templateUrl: './select-spell.component.html',
  styleUrls: ['./select-spell.component.css']
})
export class SelectSpellComponent implements OnInit {

  spells: Spell[] = []
  spellId: number = 1

  constructor(
    private spellService: SpellService,
    private batlleManager: BatlleManagerService
  ) { }

  ngOnInit() {
    this.getSpells();
    this.batlleManager.subsVar2 = this.batlleManager.    
    invokeSecondComponentFunction.subscribe((name:string) => {    
      this.updateNames()    
    });
    this.batlleManager.magicDamage = 2;
    this.batlleManager.spellCost = 4;
  }

  getSpells(): void {
    this.spellService.getSpells()
      .subscribe(spells => this.spells = spells);
  }

  updateNames(): void {
    this.spellService.getSpells().forEach(
      ele => {
        for(let n = 0;n<this.spells.length;n++)
          {
            this.spells[n].name = ele[n].name;
          }
      }
    )
  }

  //damage and mana cost
  fun(event: any): void {
    let spellId = event.target.value;
    this.batlleManager.magicDamage = this.spells[spellId-1].damage;
    this.batlleManager.spellCost = this.spells[spellId-1].manaCost;
  }

}
