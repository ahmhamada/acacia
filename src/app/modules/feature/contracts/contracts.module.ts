import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';

import { ContractsListingComponent } from './pages/contracts-listing/contracts-listing.component';
import { AddContractComponent } from './pages/add-contract/add-contract.component';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ContractDetailsComponent } from './pages/contract-details/contract-details.component';

@NgModule({
  declarations: [ContractsListingComponent, AddContractComponent, ContractDetailsComponent],
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    ContractsRoutingModule,
  ],
})
export class ContractsModule {}
