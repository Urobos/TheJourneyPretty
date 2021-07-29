import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { ArmorsComponent } from './armors/armors.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { CorruptedGuardianComponent } from './corrupted-guardian/corrupted-guardian.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { MapSchemaComponent } from './map-schema/map-schema.component';
import { SelectSpellComponent } from './select-spell/select-spell.component';
import { SpellDetailComponent } from './spell-detail/spell-detail.component';
import { SpellsComponent } from './spells/spells.component';
import { BatlleManagerService } from './batlle-manager.service';
import { HelpfulValuesService } from './helpful-values.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ArmorsComponent,
    WeaponsComponent,
    CorruptedGuardianComponent,
    EquipmentComponent,
    MapSchemaComponent,
    SelectSpellComponent,
    SpellDetailComponent,
    SpellsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [BatlleManagerService,HelpfulValuesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
