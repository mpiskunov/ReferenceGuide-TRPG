import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { GeneralItemsComponent } from './general-items/general-items.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemRoutingModule } from './items-routing.module';
import { FoodAndDrinkComponent } from './food-and-drink/food-and-drink.component';
import { ItemDetailComponent } from './general-items/item-detail/item-detail.component';



@NgModule({
  declarations: [GeneralItemsComponent, DashboardComponent, FoodAndDrinkComponent, ItemDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    ItemRoutingModule
  ]
})
export class ItemsModule { }
