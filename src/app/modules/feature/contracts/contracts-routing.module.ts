import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContractComponent } from './pages/add-contract/add-contract.component';
import { CommercialContractsListingComponent } from './pages/commercial-contracts-listing/commercial-contracts-listing.component';
import { ContractDetailsComponent } from './pages/contract-details/contract-details.component';
import { ContractsListingComponent } from './pages/contracts-listing/contracts-listing.component';

const routes: Routes = [
  {
    title: 'Residential Contracts',
    path: 'residential',
    children: [
      {
        title: 'Residential Contracts Listing',
        path: '',
        component: ContractsListingComponent,
      },
      {
        title: 'Add Contract',
        path: 'add-contract',
        component: AddContractComponent,
      },
      {
        title: 'Contract Details',
        path: 'details/:id',
        component: ContractDetailsComponent,
      },
    ],
  },
  {
    title: 'Commercial Contracts',
    path: 'commercial',
    children: [
      {
        title: 'Commercial Contracts Listing',
        path: '',
        component: CommercialContractsListingComponent,
      },
      {
        title: 'Add Contract',
        path: 'add-contract',
        component: AddContractComponent,
      },
      {
        title: 'Contract Details',
        path: 'details/:id',
        component: ContractDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractsRoutingModule {}
