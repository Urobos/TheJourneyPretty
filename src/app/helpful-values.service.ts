import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelpfulValuesService {

  public val = new BehaviorSubject(true);
  currentValue = this.val.asObservable();
  public rememberNode : number = 11;
  public rememberDirections : string = "S";

  constructor() {}

  changeValue() {
    this.val.next(!this.val);
  }

}
