import {NgModule} from '@angular/core';
import {ArmorListComponent} from './armor-list.component'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArmorsRoutingModule } from './armors-routing.module';
//import { ReplaceWithValuePipe } from 'src/app/shared/pipes/add-value-if-exists.pipe';


@NgModule({
    declarations: [
        ArmorListComponent,
        //ReplaceWithValuePipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ArmorsRoutingModule,
        SharedModule
    ]
})

export class ArmorModule{ }