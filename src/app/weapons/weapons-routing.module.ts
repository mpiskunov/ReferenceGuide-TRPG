import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeaponListComponent } from './weapon-list/weapon-list.component';
import { WeaponDetailComponent } from './weapon-detail/weapon-detail.component';


const routes: Routes = [ 
  { path: 'weapons', component: WeaponListComponent},
  { path: 'weapons/:id', component: WeaponDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WeaponsRoutingModule { }
