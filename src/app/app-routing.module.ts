import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArmorListComponent } from './armor/armor-list/armor-list.component';


const routes: Routes = [ 
  { path: '', component: HomeComponent },
  { path: 'Armors', component: ArmorListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// an array of routes so you dont have to keep importing components in app.component.ts
export const routingComponents = [HomeComponent,ArmorListComponent]
