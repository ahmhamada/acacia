import { Injectable } from '@angular/core';
import { XhrService } from '../../../../core/services/xhr/xhr.service';
import { Method } from '../../../../core/enums/method.enum';
import { map } from 'rxjs';
import { AddHandOverForm } from '../../_models/hand-over-form-payload.model';

@Injectable({
  providedIn: 'root',
})
export class UnitsService {
  constructor(private xhrService: XhrService) {}

  getContractsLookup() {
    return this.xhrService
      .call({
        url: 'api/Contract/GetContractLookup',
        method: Method.post,
        body: {},
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  getHandingOverDetails(contractId: number) {
    return this.xhrService
      .call({
        url: `api/HandingOver/GetHandOver/${contractId}`,
        method: Method.get,
        body: {},
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  getHandingOverForm() {
    return this.xhrService
      .call({
        url: 'api/HandingOver/PrepareHandingOverForm',
        method: Method.get,
        body: {},
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  getHandOverContractData(contractId: number) {
    return this.xhrService
      .call({
        url: `api/HandingOver/GetHandOverContractData/${contractId}`,
        method: Method.get,
        body: {},
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  addHandOverForm(payload: AddHandOverForm) {
    return this.xhrService
      .call({
        url: 'api/HandingOver/AddHandingOverForm',
        method: Method.post,
        body: payload,
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  searchHandingRequests(payload: any) {
    return this.xhrService
      .call({
        url: 'api/HandingOver/SearchHandingOver',
        method: Method.post,
        body: payload,
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
