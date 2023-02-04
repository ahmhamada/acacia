import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { PropertyListingComponent } from './pages/property-listing/property-listing.component';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [PropertyListingComponent],
  imports: [CommonModule, TranslateModule, SharedModule, PropertyRoutingModule],
})
export class PropertyModule {}
