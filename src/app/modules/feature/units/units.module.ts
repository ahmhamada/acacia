import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitsRoutingModule } from './units-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { HandingUnitsListingComponent } from './pages/handing-units-listing/handing-units-listing.component';
import { AddUnitRequestComponent } from './pages/add-unit-request/add-unit-request.component';
import { UnitDetailsComponent } from './pages/unit-details/unit-details.component';

@NgModule({
  declarations: [
    AddUnitRequestComponent,
    HandingUnitsListingComponent,
    UnitDetailsComponent,
  ],
  imports: [CommonModule, TranslateModule, SharedModule, UnitsRoutingModule],
})
export class UnitsModule {}
