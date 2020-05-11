import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
//import { HomeComponent } from './home/home.component';
//import { ArmorListComponent } from './armor/armor-list/armor-list.component';
import { WeaponsModule } from './weapons/weapons.module';
import { ItemsModule } from './items/items.module';
import { MonstersModule } from './monsters/monsters.module';

@NgModule({
  // This is where any internal components go.
  // app.module needs to know if any more components are created, so you must import the component as seen above.
  declarations: [AppComponent, routingComponents],
  // Imports from other app modules
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    WeaponsModule,
    ItemsModule,
    MonstersModule,
  ],
  providers: [],
  // Starting component of the app, nothing to do with bootstrap front-end library!
  bootstrap: [AppComponent],
})
export class AppModule {}
