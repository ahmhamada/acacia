import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Url } from 'src/app/modules/shared/_models/url.enum';
import { UnitsLogicService } from '../../services/units-logic/units-logic.service';

@Component({
  selector: 'unit-request-details',
  templateUrl: './unit-request-details.component.html',
  styleUrls: ['./unit-request-details.component.scss'],
})
export class UnitRequestDetailsComponent implements OnInit {
  contractId: number;
  isHandingRequest: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private unitsLogicService: UnitsLogicService
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.isHandingRequest = params['isHandingRequest'];
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.contractId = params['id'];
      this.getContractDetails();
      // this.onDownloadFile()
    });
  }

  getContractDetails() {
    // this.contractsLogicService
    //   .getContractDetails(this.contractId)
    //   .subscribe((res: any) => {
    //     if (res) {
    //       this.contractDetails = res;
    //       this.calculatedContractDuration = generateDateDuration(
    //         new Date(res.startDate),
    //         new Date(res.endDate)
    //       );
    //       this.generatePaymentWay(res.paymentWay);
    //       this.installmentPlanTable = generateInstallmentPlanTable(
    //         new Date(res.startDate),
    //         res.annualRentalFees,
    //         res.gasFixedFees + res.electricityFixedFees + res.waterFixedFees,
    //         res.paymentWay,
    //         this.calculatedContractDuration.monthDifference,
    //         res.totalTaxesAmount
    //       );
    //     }
    //   });
  }

  get Url() {
    return Url;
  }

  // onDownloadFile() {
  //   this.contractsLogicService
  //     .generateContractFile(this.contractId)
  //     .subscribe((res: any) => {
  //       console.log(res);
  //     });
  // }
}
