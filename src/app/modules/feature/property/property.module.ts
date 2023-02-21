import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { PropertyListingComponent } from './pages/property-listing/property-listing.component';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { AddEditPropertyComponent } from './pages/add-edit-property/add-edit-property.component';
import { PropertyDetailsComponent } from './pages/property-details/property-details.component';

@NgModule({
  declarations: [PropertyListingComponent, AddEditPropertyComponent, PropertyDetailsComponent],
  imports: [CommonModule, TranslateModule, SharedModule, PropertyRoutingModule],
})
export class PropertyModule {}
