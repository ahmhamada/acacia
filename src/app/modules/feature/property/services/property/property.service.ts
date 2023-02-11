import { Injectable } from '@angular/core';
import { XhrService } from '../../../../core/services/xhr/xhr.service';
import { Method } from '../../../../core/enums/method.enum';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  constructor(private xhrService: XhrService) {}

  getDocumentTypes() {
    return this.xhrService
      .call({
        url: 'api/PropertyDocumentType/Get',
        method: Method.get,
        body: {},
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  getPropertyLookup(lookup: string) {
    return this.xhrService
      .call({
        url: `api/${lookup}/Get`,
        method: Method.get,
        body: {},
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  getCityAreas(cityId: number) {
    return this.xhrService
      .call({
        url: `api/Area/GetCityAreas/${cityId}`,
        method: Method.get,
        body: {},
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  getAreaDistricts(districtId: number) {
    return this.xhrService
      .call({
        url: `api/District/GetAreaDistricts/${districtId}`,
        method: Method.get,
        body: {},
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  uploadAttachments(attachment: any) {
    return this.xhrService
      .call(
        {
          url: '/api/Attachment/Upload',
          method: Method.post,
          body: attachment,
        },
        true
      )
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  downloadAttachments(attachment: string) {
    return this.xhrService
      .call({
        url: `api/Attachment/Download?fileName=${attachment}`,
        method: Method.post,
        body: {},
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  createRealEstate(payload: any) {
    return this.xhrService
      .call({
        url: 'api/RealEstate/Create',
        method: Method.post,
        body: payload,
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  editRealEstate(payload: any) {
    return this.xhrService
      .call({
        url: 'api/RealEstate/Update',
        method: Method.put,
        body: payload,
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  getRealEstates(payload: any) {
    return this.xhrService
      .call({
        url: 'api/RealEstate/Get',
        method: Method.post,
        body: payload,
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  getRealEstateById(realestateId: number) {
    return this.xhrService
      .call({
        url: `/api/RealEstate/Get/${realestateId}`,
        method: Method.get,
        body: {},
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  deleteProperty(propertyId: number) {
    return this.xhrService
      .call({
        url: `/api/RealEstate/Delete?id=${propertyId}`,
        method: Method.delete,
        body: {},
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
