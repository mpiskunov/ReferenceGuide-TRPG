import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SelfPopulatingTableComponent } from './tables/self-populating-table/self-populating-table.component';
import { AddSpaceToCapitalsPipe } from './pipes/space-capital-characters.pipe';

@NgModule({
  declarations: [
  SelfPopulatingTableComponent,
  AddSpaceToCapitalsPipe
],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    SelfPopulatingTableComponent,
    AddSpaceToCapitalsPipe
  ]
})
export class SharedModule { }
