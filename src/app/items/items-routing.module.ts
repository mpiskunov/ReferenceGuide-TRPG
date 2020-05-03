import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeneralItemsComponent } from './general-items/general-items.component';
import { FoodAndDrinkComponent } from './food-and-drink/food-and-drink.component';
import { ItemDetailComponent } from './general-items/item-detail/item-detail.component';



const routes: Routes = [ 
  { path: 'items', component: DashboardComponent },
  { path: 'GeneralGears', component: GeneralItemsComponent},
  { path: 'GeneralGears/:id', component: ItemDetailComponent},
  { path: 'FoodAndDrink', component: FoodAndDrinkComponent},
  { path: 'FoodAndDrink/:id', component: ItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
