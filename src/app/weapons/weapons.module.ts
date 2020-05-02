import { NgModule } from '@angular/core';
import { WeaponListComponent } from './weapon-list/weapon-list.component';
import { WeaponDetailComponent } from './weapon-detail/weapon-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { WeaponsRoutingModule } from './weapons-routing.module';
import { ReplaceWithValuePipe } from '../shared/add-value-if-exists.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
      WeaponListComponent,
      WeaponDetailComponent,
      ReplaceWithValuePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    WeaponsRoutingModule,
    SharedModule
  ]
})
export class WeaponsModule { }