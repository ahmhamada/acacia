import { Injectable } from '@angular/core';
import { PropertyService } from '../property/property.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PropertyLogicService {
  constructor(private propertyService: PropertyService) {}

  getDocumentTypes() {
    return this.propertyService.getDocumentTypes().pipe(
      map((result) => {
        return result;
      })
    );
  }

  getPropertyLookup(lookup: string) {
    return this.propertyService.getPropertyLookup(lookup).pipe(
      map((result) => {
        return result;
      })
    );
  }

  getCityAreas(cityId: number) {
    return this.propertyService.getCityAreas(cityId).pipe(
      map((result) => {
        return result;
      })
    );
  }

  getAreaDistricts(districtId: number) {
    return this.propertyService.getAreaDistricts(districtId).pipe(
      map((result) => {
        return result;
      })
    );
  }

  uploadAttachments(attachment: any) {
    return this.propertyService.uploadAttachments(attachment).pipe(
      map((res) => {
        return res;
      })
    );
  }

  downloadAttachments(attachment: string) {
    return this.propertyService.downloadAttachments(attachment).pipe(
      map((res) => {
        return res;
      })
    );
  }

  createRealEstate(payload: any) {
    return this.propertyService.createRealEstate(payload).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getRealEstates(payload: any) {
    return this.propertyService.getRealEstates(payload).pipe(
      map((res) => {
        return res;
      })
    );
  }

  editRealEstate(payload: any) {
    return this.propertyService.editRealEstate(payload).pipe(
      map((res) => {
        return res;
      })
    );
  }

  deleteProperty(propertyId: number) {
    return this.propertyService.deleteProperty(propertyId).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getRealEstateById(districtId: number) {
    return this.propertyService.getRealEstateById(districtId).pipe(
      map((result) => {
        const res = {
          propertyDocument: {
            documentTypeId: result.propertyDocument.propertyDocumentTypeId,
            documentNumber: result.propertyDocument.documentNumber,
            releaseDate: result.propertyDocument.createdOn,
            attachment: result.propertyDocument.attachment,
            id: result.propertyDocument.id,
          },
          owner: {
            name: result.name,
            ownerId: result.realEstateOwner.ownerId,
            ownerBirthDay: result.realEstateOwner.ownerBirthDay,
            districtId: result.realEstateOwner.districtId,
            id: result.realEstateOwner.id,
            city: result.realEstateOwner.district.area.cityId,
            area: result.realEstateOwner.district.areaId,
          },
          realEstateDetails: {
            name: result.name,
            realEstateNumber: result.realEstateNumber,
            numOfFloors: result.numOfFloors,
            numOfProperty: result.numOfProperty,
            address: result.address,
            buildingNumber: result.buildingNumber,
            addationalNumber: result.addationalNumber,
            buildDate: result.buildDate,
            realEstateTypeId: result.realEstateTypeId,
            realEstateUseId: result.realEstateUseId,
            id: result.id,
          },
          properties: result.properties,
          realEstateAttachments: result.attachments,
        };
        return res;
      })
    );
  }
}
