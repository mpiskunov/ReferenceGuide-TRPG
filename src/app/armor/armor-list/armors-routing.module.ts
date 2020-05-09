import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArmorListComponent} from './armor-list.component';

const routes: Routes = [
    { path: 'Armors', component: ArmorListComponent},

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class ArmorsRoutingModule{ }