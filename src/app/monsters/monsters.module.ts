import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MonsterListComponent } from './monster-list/monsters.component';
import { MonsterDetailComponent } from './monster-detail/monster-detail.component';
import { MonstersRoutingModule } from './monsters-routing.module';

@NgModule({
  declarations: [MonsterListComponent, MonsterDetailComponent],
  imports: [CommonModule, SharedModule, MonstersRoutingModule],
})
export class MonstersModule {}
