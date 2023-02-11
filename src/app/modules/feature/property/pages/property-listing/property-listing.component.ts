import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IDataTable } from 'src/app/modules/shared/_models/data-table.model';
import { Observable, of } from 'rxjs';
import { PropertyHeader } from '../../_models/property-header.model';
import { originalOrder } from 'src/app/modules/shared/utils/keyvalue-original-order';
import { InputTypes } from 'src/app/modules/shared/enums/form-input-types.enum';
import { FormControl } from '@angular/forms';
import { TranslationService } from 'src/app/modules/core/services/translation/translation.service';
import { Lang } from 'src/app/modules/core/enums/lang.enum';
import { PropertyLogicService } from '../../services/property-logic/property-logic.service';
import { PageEvent } from '@angular/material/paginator';
import { ConfirmDialogComponent } from 'src/app/modules/shared/components/confirm-dialog/confirm-dialog.component';
import { ConfirmationDialog } from 'src/app/modules/shared/_models/dialog-confirmation.model';
import { MatDialog } from '@angular/material/dialog';

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
  currentLang!: string;
  date = new FormControl();
  propertyPagingPayload = {
    pagedSearch: {
      pageIndex: 1,
      pageSize: 8,
    },
  };
  constructor(
    private translationService: TranslationService,
    private propertyLogicService: PropertyLogicService,
    public dialog: MatDialog
  ) {}

  get InputTypes() {
    return InputTypes;
  }

  ngOnInit(): void {
    this.getPropertyListing();
    this.translationService.currentLanguage$.subscribe((res) => {
      this.currentLang = res;
    });
  }

  onPageChange(event: PageEvent) {
    this.propertyPagingPayload.pagedSearch.pageIndex = event.pageIndex + 1;
    this.getPropertyListing();
  }

  handleRemoveProperty(propertyId: number) {
    const dialogData: ConfirmationDialog = {
      title: `ACTIONS.DELETE_REAL_ESTATE`,
      message: 'LABELS.FORM.ARE_YOU_SURE',
      actionLabel: 'ACTIONS.DELETE',
    };
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '550px',
      minWidth: '500px',
      data: dialogData,
    });
    return dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.propertyLogicService
          .deleteProperty(propertyId)
          .subscribe((res) => {
            this.getPropertyListing();
          });
      } else {
        return res;
      }
    });
  }

  getPropertyListing() {
    this.propertyLogicService
      .getRealEstates(this.propertyPagingPayload)
      .subscribe((res) => {
        this.propertyTable$ = of({
          data: res.items,
          length: res.items.length,
          pageSize: 8,
          pageIndex: 1,
          emptyState: 'LABELS.NO_DATA',
        });
      });
  }

  toRow(row: PropertyHeader): PropertyHeader {
    return row;
  }

  get Lang() {
    return Lang;
  }

  originalOrder(
    a: KeyValue<keyof PropertyHeader, string>,
    b: KeyValue<keyof PropertyHeader, string>
  ) {
    return originalOrder(a, b);
  }
}
