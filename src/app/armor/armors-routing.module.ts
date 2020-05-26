import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArmorDetailComponent } from './armor-detail/armor-detail.component';
import { DashboardComponent } from '../armor/dashboard/dashboard.component';
import { GlyphDetailComponent } from './glyph-detail/glyph-detail.component';

const routes: Routes = [
  { path: 'ArmorDashboard', component: DashboardComponent },
  { path: 'Armors/:id', component: ArmorDetailComponent },
  { path: 'Glyphs/:id', component: GlyphDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ArmorsRoutingModule {}
