import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { GeneralItemsComponent } from './general-items/general-items.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemRoutingModule } from './items-routing.module';
import { FoodAndDrinkComponent } from './food-and-drink/food-and-drink.component';
import { ItemDetailComponent } from './general-items/item-detail/item-detail.component';
import { ContainerListComponent } from './container-list/container-list.component';
import { ClothingListComponent } from './clothing-list/clothing-list.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { LodgingListComponent } from './lodging-list/lodging-list.component';
import { LodgingDetailComponent } from './lodging-detail/lodging-detail.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';



@NgModule({
  declarations: [GeneralItemsComponent, DashboardComponent, FoodAndDrinkComponent, ItemDetailComponent, ContainerListComponent, ClothingListComponent, ServiceListComponent, LodgingListComponent, LodgingDetailComponent, ServiceDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    ItemRoutingModule
  ]
})
export class ItemsModule { }
