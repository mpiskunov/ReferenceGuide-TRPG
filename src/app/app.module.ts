import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeaponsModule } from './weapons/weapons.module';
import { ItemsModule } from './items/items.module';
import { ArmorModule } from './armor/armor.module';
import { MonstersModule } from './monsters/monsters.module';
import { RunesListComponent } from './weapons/runes-list/runes-list.component';

@NgModule({
  // This is where any internal components go.
  // app.module needs to know if any more components are created, so you must import the component as seen above.
  declarations: [AppComponent],
  // Imports from other app modules
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    WeaponsModule,
    ItemsModule,
    ArmorModule,
    MonstersModule,
  ],
  providers: [],
  // Starting component of the app, nothing to do with bootstrap front-end library!
  bootstrap: [AppComponent],
})
export class AppModule {}
