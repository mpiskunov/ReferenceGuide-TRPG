import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeaponListComponent } from './weapon-list/weapon-list.component';
import { WeaponDetailComponent } from './weapon-detail/weapon-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [ 
  { path: 'WeaponDashboard', component: DashboardComponent},
  { path: 'Weapons', component: WeaponListComponent},
  { path: 'Weapons/:id', component: WeaponDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WeaponsRoutingModule { }
