import { Component, OnInit } from '@angular/core';
import { IDataTable } from 'src/app/modules/shared/_models/data-table.model';
import { Observable, of } from 'rxjs';
import { InputTypes } from 'src/app/modules/shared/enums/form-input-types.enum';
import { TranslationService } from 'src/app/modules/core/services/translation/translation.service';
import { Lang } from 'src/app/modules/core/enums/lang.enum';
import { PageEvent } from '@angular/material/paginator';
import { ConfirmDialogComponent } from 'src/app/modules/shared/components/confirm-dialog/confirm-dialog.component';
import { ConfirmationDialog } from 'src/app/modules/shared/_models/dialog-confirmation.model';
import { MatDialog } from '@angular/material/dialog';
import { ContractType } from '../../enums/contract-type.enum';
import { UnitsLogicService } from '../../services/units-logic/units-logic.service';

@Component({
  selector: 'handing-units-listing',
  templateUrl: './handing-units-listing.component.html',
  styleUrls: ['./handing-units-listing.component.scss'],
})
export class HandingUnitsListingComponent implements OnInit {
  unitsRequestsTable$: Observable<IDataTable<any>> = of({
    data: [],
    length: 0,
    pageSize: 0,
    pageIndex: 0,
    emptyState: 'No Data Found!',
  });

  handingUnitsPaging = {
    pageIndex: 1,
    pageSize: 8,
  };

  currentLang!: string;

  constructor(
    private translationService: TranslationService,
    private unitsLogicService: UnitsLogicService,
    public dialog: MatDialog
  ) {}

  get InputTypes() {
    return InputTypes;
  }

  ngOnInit(): void {
    this.searchHandingRequests();
    this.translationService.currentLanguage$.subscribe((res) => {
      this.currentLang = res;
    });
  }

  onPageChange(event: PageEvent) {
    this.handingUnitsPaging.pageIndex = event.pageIndex + 1;
    this.searchHandingRequests();
  }

  handleRemoveUnitRequest(contractId: number) {
    const dialogData: ConfirmationDialog = {
      title: `ACTIONS.DELETE_HANDING_FORM`,
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
        this.unitsLogicService
          .deleteHandingForm(contractId)
          .subscribe((res) => {
            this.searchHandingRequests();
          });
      } else {
        return res;
      }
    });
  }

  searchHandingRequests() {
    this.unitsLogicService
      .searchHandingRequests(this.handingUnitsPaging)
      .subscribe((res) => {
        this.unitsRequestsTable$ = of({
          data: res?.items,
          length: res.totalcount,
          pageSize: res.paginationCount,
          pageIndex: 1,
          emptyState: 'LABELS.NO_DATA',
        });
      });
  }

  get Lang() {
    return Lang;
  }
}
