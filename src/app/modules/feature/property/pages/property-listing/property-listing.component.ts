import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IDataTable } from 'src/app/modules/shared/_models/data-table.model';
import { Observable, of } from 'rxjs';
import { PropertyHeader } from '../../_models/property-header.model';
import { originalOrder } from 'src/app/modules/shared/utils/keyvalue-original-order';
@Component({
  selector: 'property-listing',
  templateUrl: './property-listing.component.html',
  styleUrls: ['./property-listing.component.scss'],
})
export class PropertyListingComponent implements OnInit {
  propertyTable$: Observable<IDataTable<PropertyHeader>> = of({
    data: [],
    length: 0,
    pageSize: 0,
    pageIndex: 0,
    emptyState: 'No Data Found!',
  });

  headers!: PropertyHeader;

  constructor() {}

  ngOnInit(): void {
    this.propertyTable$ = of({
      data: [
        {
          id: 1,
          realEstate: 'real estate 1',
          owner: 'User 1',
          date: '25/2/2023',
          status: 'Active',
        }
      ],
      length: 1,
      pageSize: 8,
      pageIndex: 0,
      emptyState: 'No Data Found!',
    });
  }

  toRow(row: PropertyHeader): PropertyHeader {
    return row;
  }

  originalOrder(
    a: KeyValue<keyof PropertyHeader, string>,
    b: KeyValue<keyof PropertyHeader, string>
  ) {
    return originalOrder(a, b);
  }
}
