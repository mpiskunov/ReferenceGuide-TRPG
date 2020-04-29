import { NgModule } from '@angular/core';
import { WeaponListComponent } from './weapon-list/weapon-list.component';
import { WeaponDetailComponent } from './weapon-detail/weapon-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { WeaponsRoutingModule } from './weapons-routing.module';

@NgModule({
  declarations: [
      WeaponListComponent,
      WeaponDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    WeaponsRoutingModule
  ]
})
export class WeaponsModule { }