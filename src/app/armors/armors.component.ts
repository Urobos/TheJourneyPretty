import { Component, OnInit } from '@angular/core';
import { Armor } from '../armor';
import { ArmorService } from '../armor.service';

@Component({
  selector: 'app-armors',
  templateUrl: './armors.component.html',
  styleUrls: ['./armors.component.css']
})
export class ArmorsComponent implements OnInit {
  armors: Armor[] = [];

  constructor(
    private armorService: ArmorService
  ) {}

  ngOnInit() {
    this.getArmors();
  }

  getArmors(): void {
    this.armorService.getArmors()
      .subscribe(armors => this.armors = armors);
  }
}
