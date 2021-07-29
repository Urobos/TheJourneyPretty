import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BatlleManagerService } from '../batlle-manager.service';
import { Spell } from '../spell';
import { SpellService } from '../spell.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-spell-detail',
  templateUrl: './spell-detail.component.html',
  styleUrls: ['./spell-detail.component.css']
})
export class SpellDetailComponent implements OnInit {

  @Input() spell?: Spell;

  constructor(
    private route: ActivatedRoute,
    private spellService: SpellService,
    private location: Location,
    private batlleManager : BatlleManagerService
  ) { }

  ngOnInit(): void {
    this.getSpell();
  }

  getSpell(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.spellService.getSpell(id).subscribe(spell => this.spell = spell)
  }

  save(): void {
    if (this.spell) {
      this.spellService.updateSpell(this.spell)
        .subscribe(() => this.goBack());
    };
    this.batlleManager.onSecondComponentButtonClick();
  }

  goBack(): void {
    this.location.back();
  }

}
