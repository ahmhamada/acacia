import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { generateDateDuration } from 'src/app/modules/shared/utils/generate-date-duration';
import { generateInstallmentPlanTable } from 'src/app/modules/shared/utils/generate-installment-table';
import { Url } from 'src/app/modules/shared/_models/url.enum';
import { PaymentWay } from '../../../../shared/enums/payment-way.enum';
import { UnitsLogicService } from '../../services/units-logic/units-logic.service';

@Component({
  selector: 'unit-details',
  templateUrl: './unit-details.component.html',
  styleUrls: ['./unit-details.component.scss'],
})
export class UnitDetailsComponent implements OnInit {
  contractId: number;
  contractDetails: any;
  // isCommercialContract: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private unitsLogicService: UnitsLogicService
  ) {
    // this.activatedRoute.queryParams.subscribe((params) => {
    //   this.isCommercialContract = params['isCommercial'];
    // });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.contractId = params['id'];
      this.getContractDetails();
      // this.onDownloadFile()
    });
  }

  getContractDetails() {
    this.unitsLogicService
      .getHandingOverDetails(this.contractId)
      .subscribe((res: any) => {
        if (res) {
          this.contractDetails = res;
        }
      });
  }

  get Url() {
    return Url;
  }

}
