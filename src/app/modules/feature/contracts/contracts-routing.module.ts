import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContractComponent } from './pages/add-contract/add-contract.component';
import { ContractDetailsComponent } from './pages/contract-details/contract-details.component';
import { ContractsListingComponent } from './pages/contracts-listing/contracts-listing.component';

const routes: Routes = [
  {
    title: 'Contracts',
    path: '',
    children: [
      {
        title: 'Contracts',
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractsRoutingModule {}
