import { Injectable } from '@angular/core';
import { XhrService } from '../../../../core/services/xhr/xhr.service';
import { Method } from '../../../../core/enums/method.enum';
import { map } from 'rxjs/operators';
import { RealEstateSearch } from '../../_models/realestate-search-model';
import { ContractPayload } from '../../_models/contract-payload.model';

@Injectable({
  providedIn: 'root',
})
export class ContractsService {
  constructor(private xhrService: XhrService) {}

  searchRealEstate(payload: RealEstateSearch) {
    return this.xhrService
      .call({
        url: '/api/RealEstate/Search',
        method: Method.post,
        body: payload,
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  getRealEstateProperties(realEstateId: number) {
    return this.xhrService
      .call({
        url: `api/Property/GetRealEstateProperties/${realEstateId}`,
        method: Method.get,
        body: {},
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  getRealEstateOwner(realEstateId: number) {
    return this.xhrService
      .call({
        url: `api/RealEstateOwner/Get/${realEstateId}`,
        method: Method.get,
        body: {},
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  createContract(payload: ContractPayload) {
    return this.xhrService
      .call({
        url: 'api/Contract/Create',
        method: Method.post,
        body: payload,
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  searchContracts(payload: any) {
    return this.xhrService
      .call({
        url: 'api/Contract/SearchContract',
        method: Method.post,
        body: payload,
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  deleteContract(contractId: number) {
    return this.xhrService
      .call({
        url: `api/Contract/Delete/${contractId}`,
        method: Method.delete,
        body: {},
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  getContractDetails(contractId: number) {
    return this.xhrService
      .call({
        url: `/api/Contract/Get/${contractId}`,
        method: Method.get,
        body: {},
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  generateContractFile(contractId: number) {
    return this.xhrService
      .call({
        url: `/api/Contract/GenerateContractFile/${contractId}`,
        method: Method.get,
        body: {},
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
