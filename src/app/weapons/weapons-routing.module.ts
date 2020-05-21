import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeaponListComponent } from './weapon-list/weapon-list.component';
import { WeaponDetailComponent } from './weapon-detail/weapon-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BombsComponent } from './bomb-list/bomb-list.component';
import { BombDetailComponent } from './bomb-detail/bomb-detail.component';
import { TrapsComponent } from './trap-list/trap-list.component';
import { TrapDetailComponent } from './trap-detail/trap-detail.component';
import { AmmunitionDetailComponent } from './ammunition-detail/ammunition-detail.component';
import { AmmunitionsComponent } from './ammunition-list/ammunition-list.component';
import { RunesListComponent } from './runes-list/runes-list.component';
import { RuneDetailComponent } from './rune-detail/rune-detail.component';

const routes: Routes = [
  { path: 'WeaponDashboard', component: DashboardComponent },
  { path: 'Weapons', component: WeaponListComponent },
  { path: 'Weapons/:id', component: WeaponDetailComponent },
  { path: 'Bombs', component: BombsComponent },
  { path: 'Bombs/:id', component: BombDetailComponent },
  { path: 'Traps', component: TrapsComponent },
  { path: 'Traps/:id', component: TrapDetailComponent },
  { path: 'Runes', component: RunesListComponent },
  { path: 'Runes/:id', component: RuneDetailComponent },
  { path: 'Ammunitions', component: AmmunitionsComponent },
  { path: 'Ammunitions/:id', component: AmmunitionDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class WeaponsRoutingModule {}
