import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyListingComponent } from './pages/property-listing/property-listing.component';

const routes: Routes = [
  {
    title: 'Properties',
    path: 'property',
    children: [
      {
        title: 'All Properties',
        path: '',
        component: PropertyListingComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }