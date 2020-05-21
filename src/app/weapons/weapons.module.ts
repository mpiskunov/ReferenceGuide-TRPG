import { NgModule } from '@angular/core';
import { WeaponListComponent } from './weapon-list/weapon-list.component';
import { WeaponDetailComponent } from './weapon-detail/weapon-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { WeaponsRoutingModule } from './weapons-routing.module';
import { ReplaceWithValuePipe } from '../shared/pipes/add-value-if-exists.pipe';
import { SharedModule } from '../shared/shared.module';
import { BombsComponent } from './bomb-list/bomb-list.component';
import { TrapsComponent } from './trap-list/trap-list.component';
import { AmmunitionsComponent } from './ammunition-list/ammunition-list.component';
import { BombDetailComponent } from './bomb-detail/bomb-detail.component';
import { TrapDetailComponent } from './trap-detail/trap-detail.component';
import { AmmunitionDetailComponent } from './ammunition-detail/ammunition-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RunesListComponent } from './runes-list/runes-list.component';
import { RuneDetailComponent } from './rune-detail/rune-detail.component';

@NgModule({
  declarations: [
    WeaponListComponent,
    WeaponDetailComponent,
    ReplaceWithValuePipe,
    BombsComponent,
    TrapsComponent,
    AmmunitionsComponent,
    BombDetailComponent,
    TrapDetailComponent,
    RunesListComponent,
    RuneDetailComponent,
    AmmunitionDetailComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    WeaponsRoutingModule,
    SharedModule,
  ],
})
export class WeaponsModule {}
