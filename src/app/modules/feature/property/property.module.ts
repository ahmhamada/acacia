import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { PropertyListingComponent } from './pages/property-listing/property-listing.component';


@NgModule({
  declarations: [
    PropertyListingComponent
  ],
  imports: [
    CommonModule,
    PropertyRoutingModule
  ]
})
export class PropertyModule { }
