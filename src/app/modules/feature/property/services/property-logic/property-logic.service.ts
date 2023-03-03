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

  deleteUnit(unitId: number) {
    return this.propertyService.deleteUnit(unitId).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getRealEstateDetails(districtId: number) {
    return this.propertyService.getRealEstateById(districtId).pipe(
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
            releaseDate: result.propertyDocument.releaseDate,
            attachment: result.propertyDocument.attachment,
            id: result.propertyDocument.id,
            instrumentPhoto: result.propertyDocument.instrumentPhoto,
            licensePhoto: result.propertyDocument.licensePhoto,
          },
          owner: {
            name: result.realEstateOwner.name,
            ownerNationalId: result.realEstateOwner.ownerNationalId,
            ownerBirthDay: result.realEstateOwner.ownerBirthDay,
            districtId: result.realEstateOwner.districtId,
            id: result.realEstateOwner.id,
            city: result.realEstateOwner.cityId,
            area: result.realEstateOwner.areaId,
            idPhoto: result.realEstateOwner.idPhoto,
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
            realEstateTypeId: result.realEstateType.id,
            realEstateUseId: result.realEstateUse.id,
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
