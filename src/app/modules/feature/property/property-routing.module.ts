import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditPropertyComponent } from './pages/add-edit-property/add-edit-property.component';
import { PropertyListingComponent } from './pages/property-listing/property-listing.component';

const routes: Routes = [
  {
    title: 'Properties',
    path: '',
    children: [
      {
        title: 'Properties',
        path: '',
        component: PropertyListingComponent,
      },
      {
        title: 'Add Property',
        path: 'add-property',
        component: AddEditPropertyComponent,
      },
      {
        title: 'Edit Property',
        path: 'edit-property/:id',
        component: AddEditPropertyComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyRoutingModule {}
