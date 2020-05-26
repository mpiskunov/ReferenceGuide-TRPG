import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemDetailComponent } from './general-items/item-detail/item-detail.component';
import { LodgingDetailComponent } from './lodging-detail/lodging-detail.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

const routes: Routes = [
  { path: 'GeneralGearDashboard', component: DashboardComponent },
  { path: 'GeneralGears/:id', component: ItemDetailComponent },
  { path: 'FoodAndDrink/:id', component: ItemDetailComponent },
  { path: 'Lodging/:id', component: LodgingDetailComponent },
  { path: 'Services/:id', component: ServiceDetailComponent },
  { path: 'Containers/:id', component: ItemDetailComponent },
  { path: 'Clothing/:id', component: ItemDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ItemRoutingModule {}
