import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUnitRequestComponent } from './pages/add-unit-request/add-unit-request.component';
import { HandingUnitsListingComponent } from './pages/handing-units-listing/handing-units-listing.component';
import { UnitDetailsComponent } from './pages/unit-details/unit-details.component';

const routes: Routes = [
  {
    title: 'Handing Over Units',
    path: 'handing',
    children: [
      {
        title: 'Handing Over Units Listing',
        path: '',
        component: HandingUnitsListingComponent,
      },
      {
        title: 'Add Handing Over Unit Request',
        path: 'add-request',
        component: AddUnitRequestComponent,
      },
      {
        title: 'Unit Handing Request Details',
        path: 'details/:id',
        component: UnitDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitsRoutingModule {}
