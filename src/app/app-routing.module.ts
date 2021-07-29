import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorruptedGuardianComponent } from './corrupted-guardian/corrupted-guardian.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { MapSchemaComponent } from './map-schema/map-schema.component';
import { SpellDetailComponent } from './spell-detail/spell-detail.component';
import { SpellsComponent } from './spells/spells.component';

const routes: Routes = [
  { path: 'spells', component: SpellsComponent },
  { path: '', redirectTo: '/map', pathMatch: 'full'},
  { path: 'detail/:id', component: SpellDetailComponent},
  { path: 'map', component: MapSchemaComponent},
  { path: 'ekwipunek', component: EquipmentComponent},
  { path: 'CorruptedGuardian', component: CorruptedGuardianComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
