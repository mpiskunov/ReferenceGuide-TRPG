import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeaponListComponent } from './weapons/weapon-list/weapon-list.component';
import { HomeComponent } from './home/home.component';
import { ArmorListComponent } from './armor/armor-list/armor-list.component';

@NgModule({
  // This is where any internal components go.
  // app.module needs to know if any more components are created, so you must import the component as seen above.
  declarations: [
    AppComponent,
    WeaponListComponent,
    HomeComponent,
    ArmorListComponent
  ],
  // Imports from other app modules
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // Starting component of the app, nothing to do with bootstrap front-end library!
  bootstrap: [AppComponent]
})
export class AppModule { }
