import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MonsterListComponent } from './monster-list/monsters.component';
import { MonsterDetailComponent } from './monster-detail/monster-detail.component';
import { MonstersRoutingModule } from './monsters-routing.module';
import { MonsterWeaponsComponent } from './monster-weapons/monster-weapons.component';
import { MonsterVulnerabilitiesComponent } from './monster-vulnerabilities/monster-vulnerabilities.component';
import { MonsterStatisticsComponent } from './monster-statistics/monster-statistics.component';
import { MonsterSkillsComponent } from './monster-skills/monster-skills.component';
import { MonsterLootsComponent } from './monster-loots/monster-loots.component';
import { MonsterInformationsComponent } from './monster-informations/monster-informations.component';
import { MonsterDerivedStatisticsComponent } from './monster-derived-statistics/monster-derived-statistics.component';
import { MonsterAbilitiesComponent } from './monster-abilities/monster-abilities.component';

@NgModule({
  declarations: [MonsterListComponent, MonsterDetailComponent, MonsterWeaponsComponent, MonsterVulnerabilitiesComponent, MonsterStatisticsComponent, MonsterSkillsComponent, MonsterLootsComponent, MonsterInformationsComponent, MonsterDerivedStatisticsComponent, MonsterAbilitiesComponent],
  imports: [CommonModule, SharedModule, MonstersRoutingModule],
})
export class MonstersModule {}
