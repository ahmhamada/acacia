import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AddHandOverForm } from '../../_models/hand-over-form-payload.model';
import { UnitsService } from '../units/units.service';

@Injectable({
  providedIn: 'root',
})
export class UnitsLogicService {
  constructor(private unitsService: UnitsService) {}

  getContractsLookup() {
    return this.unitsService.getContractsLookup().pipe(
      map((res) => {
        return res;
      })
    );
  }

  getHandingOverForm() {
    return this.unitsService.getHandingOverForm().pipe(
      map((res) => {
        return res;
      })
    );
  }

  getHandingOverDetails(contractId: number) {
    return this.unitsService.getHandingOverDetails(contractId).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getHandOverContractData(contractId: number) {
    return this.unitsService.getHandOverContractData(contractId).pipe(
      map((res) => {
        return res;
      })
    );
  }

  addHandOverForm(payload: AddHandOverForm) {
    return this.unitsService.addHandOverForm(payload).pipe(
      map((res) => {
        return res;
      })
    );
  }

  searchHandingRequests(payload: any) {
    return this.unitsService.searchHandingRequests(payload).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
