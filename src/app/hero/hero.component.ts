import { Component, OnInit } from '@angular/core';
import { BatlleManagerService } from '../batlle-manager.service';
import { HelpfulValuesService } from '../helpful-values.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  maxHp : number = 20;
  aktualHp : number = 20;
  magicPoints : number = 20;
  defense : number = 5
  money : number = 0
  noBatlle!: boolean;

  constructor(
    private batlleManager : BatlleManagerService,
    private helpfulValues : HelpfulValuesService
  ) { }

  ngOnInit() {
    this.helpfulValues.currentValue.subscribe(nu => this.noBatlle = nu)    
  }    
    
  turnExecuteWeapon() : void{    
    this.batlleManager.damageFromHero = this.batlleManager.physicalDamage;
    this.batlleManager.onFirstComponentButtonClick();
    if(this.batlleManager.damageFromMonster != -2) {
      if(this.batlleManager.damageFromMonster > this.defense) {
        this.aktualHp -= this.batlleManager.damageFromMonster - this.defense;
      }
    }
    else {
      this.batlleManager.damageFromMonster = 0;
      // TO DO WIADOMOSC ZE POTWOR ZABITY
    }
    if(this.aktualHp <= 0) alert("Przegrales koczkodanie!!!Hahaha!!!!");
  }

  turnExecuteSpell() : void {
    if(this.batlleManager.spellCost > this.magicPoints) {

    } //TO DO WIADOMOSC NIE DA SIE
    else
    {
      this.magicPoints -= this.batlleManager.spellCost
      this.batlleManager.damageFromHero = this.batlleManager.magicDamage;
      this.batlleManager.onFirstComponentButtonClick();
      if(this.batlleManager.damageFromMonster != -2) {
        if(this.batlleManager.damageFromMonster > this.defense) {
          this.aktualHp -= this.batlleManager.damageFromMonster - this.defense;
        }
      }
      else {
        this.batlleManager.damageFromMonster = 0;
        // TO DO WIADOMOSC ZE POTWOR ZABITY
      }
      if(this.aktualHp <= 0) alert("Przegrales koczkodanie!!!Hahaha!!!!")
    }
  }

}
