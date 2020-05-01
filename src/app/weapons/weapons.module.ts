import { NgModule } from '@angular/core';
import { WeaponListComponent } from './weapon-list/weapon-list.component';
import { WeaponDetailComponent } from './weapon-detail/weapon-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { WeaponsRoutingModule } from './weapons-routing.module';
import { ReplaceWithValuePipe } from './add-value-if-exists.pipe';
import { AddSpaceToCapitalsPipe } from './space-capital-characters.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
      WeaponListComponent,
      WeaponDetailComponent,
      ReplaceWithValuePipe,
      AddSpaceToCapitalsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    WeaponsRoutingModule,
    FormsModule
  ]
})
export class WeaponsModule { }