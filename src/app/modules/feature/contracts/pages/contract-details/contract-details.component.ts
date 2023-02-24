import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { generateDateDuration } from 'src/app/modules/shared/utils/generate-date-duration';
import { generateInstallmentPlanTable } from 'src/app/modules/shared/utils/generate-installment-table';
import { PaymentWay } from '../../../../shared/enums/payment-way.enum';
import { ContractsLogicService } from '../../services/contracts-logic/contracts-logic.service';
import { CalculatedContractDuration } from '../../_models/calculated-contract-duration.model';

@Component({
  selector: 'contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.scss'],
})
export class ContractDetailsComponent implements OnInit {
  contractId: number;
  contractDetails: any;
  calculatedContractDuration: CalculatedContractDuration;
  installmentPlan: string;
  installmentPlanTable = [];
  isCommercialContract: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private contractsLogicService: ContractsLogicService
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.isCommercialContract = params['isCommercial'];
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
    this.contractsLogicService
      .getContractDetails(this.contractId)
      .subscribe((res: any) => {
        if (res) {
          this.contractDetails = res;
          this.calculatedContractDuration = generateDateDuration(
            new Date(res.startDate),
            new Date(res.endDate)
          );
          this.generatePaymentWay(res.paymentWay);
          this.installmentPlanTable = generateInstallmentPlanTable(
            new Date(res.startDate),
            res.annualRentalFees,
            res.gasFixedFees + res.electricityFixedFees + res.waterFixedFees,
            res.paymentWay,
            this.calculatedContractDuration.monthDifference,
            res.totalTaxesAmount
          );
        }
      });
  }

  generatePaymentWay(paymentWay: PaymentWay) {
    switch (paymentWay) {
      case PaymentWay.Monthly:
        this.installmentPlan = 'CONTRACTS.MONTHLY';
        break;
      case PaymentWay.Quarterly:
        this.installmentPlan = 'CONTRACTS.PER_QUARTER';
        break;
      case PaymentWay.SemiAnnual:
        this.installmentPlan = 'CONTRACTS.HAIF_YEAR';
        break;
      case PaymentWay.Yearly:
        this.installmentPlan = 'CONTRACTS.YEARLY';
        break;
    }
  }

  checkServicesVisibility() {
    return (
      this.contractDetails?.electricityConsumption ||
      this.contractDetails?.electricityFixedFees ||
      this.contractDetails?.gasFixedFees ||
      this.contractDetails?.gasConsumption ||
      this.contractDetails?.waterFixedFees ||
      this.contractDetails?.waterConsumption
    );
  }

  // onDownloadFile() {
  //   this.contractsLogicService
  //     .generateContractFile(this.contractId)
  //     .subscribe((res: any) => {
  //       console.log(res);
  //     });
  // }
}
