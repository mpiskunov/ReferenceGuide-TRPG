import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonsterListComponent } from './monster-list/monsters.component';
import { MonsterDetailComponent } from './monster-detail/monster-detail.component';


const routes: Routes = [
    { path: 'Monsters', component: MonsterListComponent },
    { path: 'Monsters/:id', component: MonsterDetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MonstersRoutingModule { }
