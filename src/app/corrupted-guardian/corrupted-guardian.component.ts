import { Component, OnInit } from '@angular/core';
import { BatlleManagerService } from '../batlle-manager.service';
import { HelpfulValuesService } from '../helpful-values.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-corrupted-guardian',
  templateUrl: './corrupted-guardian.component.html',
  styleUrls: ['./corrupted-guardian.component.css']
})
export class CorruptedGuardianComponent implements OnInit {

  name: string = "Corrupted Guardian";
  hp: number = 8;
  noBatlle!: boolean;

  constructor(    
    private batlleManager: BatlleManagerService,
    private location: Location,
    private helpfulValues : HelpfulValuesService,
  ) { }    
    
  ngOnInit() {        
    this.batlleManager.subsVar = this.batlleManager.    
    invokeFirstComponentFunction.subscribe((name:string) => {    
      this.monsterAction()    
    });
    this.helpfulValues.currentValue.subscribe(nu => this.noBatlle = nu);    
  } 
  
  ngOnDestroy() {
    this.batlleManager.subsVar.unsubscribe();
  }
  
  monsterAction() : void {
    if(this.batlleManager.damageFromHero >= this.hp) {
      this.batlleManager.damageFromMonster = -2;
      // nie this.Data.changeValue(), bo nie działa nie wiem czemu
      this.helpfulValues.val.next(!this.noBatlle);
      this.location.back()
    }
    else {
      this.hp -= this.batlleManager.damageFromHero;
      this.batlleManager.damageFromMonster = this.randomAtack();
    }
  }

  randomAtack(): number {
    if((Math.floor(Math.random()*2 + 1) > 1))
    {
      return this.trampling();
    }
    else {
      return this.slash();
    }
  }
  
  slash(): number {    
    return 8;
  }

  trampling(): number {
    return 7;
  }

}
