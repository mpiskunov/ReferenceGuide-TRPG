import { NgModule } from '@angular/core';
import { ArmorListComponent } from './armor-list/armor-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ArmorsRoutingModule } from './armors-routing.module';
import { ArmorDetailComponent } from './armor-detail/armor-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GlyphDetailComponent } from './glyph-detail/glyph-detail.component';
import { GlyphsListComponent } from './glyphs-list/glyphs-list.component';
import { SharedModule } from '../shared/shared.module';
//import { ReplaceWithValuePipe } from 'src/app/shared/pipes/add-value-if-exists.pipe';

@NgModule({
  declarations: [
    ArmorListComponent,
    ArmorDetailComponent,
    DashboardComponent,
    GlyphDetailComponent,
    GlyphsListComponent,
    //ReplaceWithValuePipe
  ],
  imports: [BrowserModule, HttpClientModule, ArmorsRoutingModule, SharedModule],
})
export class ArmorModule {}
