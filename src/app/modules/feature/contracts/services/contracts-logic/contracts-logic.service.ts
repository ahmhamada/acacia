import { Injectable } from '@angular/core';
import { ContractsService } from '../contracts/contracts.service';
import { map } from 'rxjs/operators';
import { RealEstateSearch } from '../../_models/realestate-search-model';
import { ContractPayload } from '../../_models/contract-payload.model';

@Injectable({
  providedIn: 'root',
})
export class ContractsLogicService {
  constructor(private contractsService: ContractsService) {}

  createContract(payload: ContractPayload) {
    return this.contractsService.createContract(payload).pipe(
      map((res) => {
        return res;
      })
    );
  }

  searchRealEstate(payload: RealEstateSearch) {
    return this.contractsService.searchRealEstate(payload).pipe(
      map((res) => {
        return res;
      })
    );
  }

  searchContracts(payload: any) {
    return this.contractsService.searchContracts(payload).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getRealEstateProperties(realEstateId: number) {
    return this.contractsService.getRealEstateProperties(realEstateId).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getRealEstateOwner(realEstateId: number) {
    return this.contractsService.getRealEstateOwner(realEstateId).pipe(
      map((res) => {
        return res;
      })
    );
  }

  
  // getRealEstates(payload: any) {
  //   return this.contractsService.getRealEstates(payload).pipe(
  //     map((res) => {
  //       return res;
  //     })
  //   );
  // }

  deleteContract(contractId: number) {
    return this.contractsService.deleteContract(contractId).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
