import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BatlleManagerService {

  invokeFirstComponentFunction = new EventEmitter();
  invokeSecondComponentFunction = new EventEmitter();    
  subsVar!: Subscription;
  subsVar2!: Subscription;
  physicalDamage : number = 2;
  magicDamage : number = 2;
  spellCost : number = 4;    
  damageFromHero : number = 0;
  damageFromMonster : number = 1;

  constructor() { }    
    
  onFirstComponentButtonClick() {    
    this.invokeFirstComponentFunction.emit();    
  }
  
  onSecondComponentButtonClick() {    
    this.invokeSecondComponentFunction.emit();    
  }
  
}
