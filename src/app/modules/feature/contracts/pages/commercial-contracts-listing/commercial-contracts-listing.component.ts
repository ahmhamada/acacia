import { Component, OnInit } from '@angular/core';
import { IDataTable } from 'src/app/modules/shared/_models/data-table.model';
import { Observable, of } from 'rxjs';
import { InputTypes } from 'src/app/modules/shared/enums/form-input-types.enum';
import { TranslationService } from 'src/app/modules/core/services/translation/translation.service';
import { Lang } from 'src/app/modules/core/enums/lang.enum';
import { ContractsLogicService } from '../../services/contracts-logic/contracts-logic.service';
import { PageEvent } from '@angular/material/paginator';
import { ConfirmDialogComponent } from 'src/app/modules/shared/components/confirm-dialog/confirm-dialog.component';
import { ConfirmationDialog } from 'src/app/modules/shared/_models/dialog-confirmation.model';
import { MatDialog } from '@angular/material/dialog';
import { ContractType } from '../../enums/contract-type.enum';

@Component({
  selector: 'commercial-contracts-listing',
  templateUrl: './commercial-contracts-listing.component.html',
  styleUrls: ['./commercial-contracts-listing.component.scss'],
})
export class CommercialContractsListingComponent implements OnInit {
  propertyTable$: Observable<IDataTable<any>> = of({
    data: [],
    length: 0,
    pageSize: 0,
    pageIndex: 0,
    emptyState: 'No Data Found!',
  });

  currentLang!: string;
  contractPagingPayload = {
    pagedSearch: {
      pageIndex: 1,
      pageSize: 8,
    },
    contractType: ContractType.Commercial,
  };
  constructor(
    private translationService: TranslationService,
    private contractsLogicService: ContractsLogicService,
    public dialog: MatDialog
  ) {}

  get InputTypes() {
    return InputTypes;
  }

  ngOnInit(): void {
    this.searchContracts();
    this.translationService.currentLanguage$.subscribe((res) => {
      this.currentLang = res;
    });
  }

  onPageChange(event: PageEvent) {
    this.contractPagingPayload.pagedSearch.pageIndex = event.pageIndex + 1;
    this.searchContracts();
  }

  handleRemoveContract(contractId: number) {
    const dialogData: ConfirmationDialog = {
      title: `ACTIONS.DELETE_CONTRACT`,
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
        this.contractsLogicService
          .deleteContract(contractId)
          .subscribe((res) => {
            this.searchContracts();
          });
      } else {
        return res;
      }
    });
  }

  searchContracts() {
    this.contractsLogicService
      .searchContracts(this.contractPagingPayload)
      .subscribe((res) => {
        this.propertyTable$ = of({
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
