import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { InputTypes } from 'src/app/modules/shared/enums/form-input-types.enum';
import { ContractsLogicService } from '../../services/contracts-logic/contracts-logic.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable, shareReplay } from 'rxjs';
import { map } from 'rxjs/operators';
import { TranslationService } from 'src/app/modules/core/services/translation/translation.service';
import { Subscriptions } from 'src/app/modules/shared/utils/subscriptions';
import { Lang } from 'src/app/modules/core/enums/lang.enum';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { ConfirmationDialog } from '../../../../shared/_models/dialog-confirmation.model';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/modules/shared/components/confirm-dialog/confirm-dialog.component';
import { ToastrService } from 'src/app/modules/shared/services/toastr/toastr.service';
import { ToastrTypes } from 'src/app/modules/shared/enums/toastrTypes';
import { LookupsService } from 'src/app/modules/shared/services/lookups/lookups.service';
import { RealEstateSearch } from '../../_models/realestate-search-model';
import { PaymentWay } from '../../enums/payment-way.enum';
import { ContractType } from '../../enums/contract-type.enum';
import { Invoice } from '../../_models/invoice.model';
import { exceedValueValidator } from 'src/app/modules/shared/utils/custom-validator';
import { ContractPayload } from '../../_models/contract-payload.model';

@Component({
  selector: 'add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.scss'],
})
export class AddContractComponent implements OnInit, OnDestroy {
  addEditContract!: FormGroup;
  currentLang!: string;
  stepperOrientation!: Observable<StepperOrientation>;
  selectedIndex: number = 0;
  subs = new Subscriptions();
  editMode: boolean = false;
  propertyTypes$!: any;
  propertyUsageTypes$!: any;
  realEstateOptions$!: any;
  propertiesOptions$!: any;
  realestateId: any;
  calculatedContractDuration: {
    years: number;
    months: number;
    days: number;
    diffInDays: number;
  };
  realEstateName: string;
  unitNumber: number;
  installmentPlanTable = [];
  constructor(
    private fb: FormBuilder,
    private contractsLogicService: ContractsLogicService,
    private translationService: TranslationService,
    breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private lookupsService: LookupsService
  ) {
    this.addEditContract = this.fb.group({
      contractDuration: this.fb.group({
        startDate: ['', [Validators.required]],
        endDate: ['', [Validators.required]],
        rentalperiod: [null],
      }),
      propertyUnitDetails: this.fb.group({
        realEstateUseId: [null, [Validators.required]],
        realEstateTypeId: [null, [Validators.required]],
        realEstateId: [null, [Validators.required]],
        propertyId: [null, [Validators.required]],
      }),
      contractParties: this.fb.group({
        name: [''],
        nationalId: [null],
        tenantName: ['', [Validators.required]],
        tenantNationalId: [
          null,
          [Validators.required, Validators.pattern('^[0-9]{10}$')],
        ],
        tenantBirthDay: ['', [Validators.required]],
        tenantTelephone: [
          null,
          [Validators.required, Validators.pattern('^[0-9]{10}$')],
        ],
        email: ['', [Validators.required, Validators.email]],
      }),
      financialDetails: this.fb.group(
        {
          annualRentalFees: [null, [Validators.required]],
          electricityFixedFees: [null],
          services: [false],
          electricityConsumption: [null],
          selectedElectricityOption: [null],
          selectedGasOption: [null],
          selectedWaterOption: [null],
          gasFixedFees: [null],
          gasConsumption: [null],
          waterFixedFees: [null],
          waterConsumption: [null],
          paymentWay: [1, [Validators.required]],
          totalValue: [null],
          insuranceAmount: [null, [Validators.required]],
          commissionAmount: [null, [Validators.required]],
        },
        {
          validators: exceedValueValidator(
            'commissionAmount',
            'annualRentalFees'
          ),
        }
      ),
    });

    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
    this.realestateId = +this.activatedRoute.snapshot.params['id'];
    this.realestateId ? (this.editMode = true) : (this.editMode = false);
    this.subs.add = this.translationService.currentLanguage$.subscribe(
      (language) => {
        this.currentLang = language;
        this.propertyTypes$ = this.lookupsService
          .getPropertyLookup('RealEstateType')
          .pipe(shareReplay(1));
        this.propertyUsageTypes$ = this.lookupsService
          .getPropertyLookup('RealEstateUse')
          .pipe(shareReplay(1));
      }
    );
  }

  onChange(e) {
    this.calculatedContractDuration = null;
    if (e.endValue) {
      this.calculatedContractDuration = this.getDateDuration(
        new Date(e.startValue),
        new Date(e.endValue)
      );
      console.log(this.calculatedContractDuration);
    }
  }

  getDateDuration(startDate: Date, endDate: Date) {
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const startDay = startDate.getDate();
    const endYear = endDate.getFullYear();
    const endMonth = endDate.getMonth();
    const endDay = endDate.getDate();

    let yearsDiff = endYear - startYear;
    let monthsDiff = endMonth - startMonth;
    let daysDiff = endDay - startDay;

    const oneDay = 24 * 60 * 60 * 1000; // one day in milliseconds
    const diffInDays = Math.round(
      Math.abs((endDate.getTime() - startDate.getTime()) / oneDay)
    );

    if (daysDiff < 0) {
      const daysInMonth = new Date(endYear, endMonth + 1, 0).getDate();
      daysDiff += daysInMonth;
      monthsDiff--;
    }
    if (monthsDiff < 0) {
      monthsDiff += 12;
      yearsDiff--;
    }

    const calculatedDate = {
      years: yearsDiff,
      months: monthsDiff,
      days: daysDiff,
      diffInDays: diffInDays,
    };
    return calculatedDate;
  }

  onPropertyTypeChange(e: any) {
    this.formControl('propertyUnitDetails', 'realEstateId').reset();
    this.formControl('propertyUnitDetails', 'propertyId').reset();
    const payload: RealEstateSearch = {
      realEstateTypeId: this.formControl(
        'propertyUnitDetails',
        'realEstateTypeId'
      ).value,
      realEstateUseId: this.formControl(
        'propertyUnitDetails',
        'realEstateUseId'
      ).value,
    };
    this.realEstateOptions$ = this.contractsLogicService
      .searchRealEstate(payload)
      .pipe(shareReplay(1));
  }

  onRealEstateChange(e: any) {
    this.formControl('propertyUnitDetails', 'propertyId').reset();
    this.subs.add = this.realEstateOptions$.subscribe(
      (res) =>
        (this.realEstateName = res.find(
          (realestate) => realestate.id === e.event.value
        ).name)
    );
    this.propertiesOptions$ = this.contractsLogicService
      .getRealEstateProperties(e.event.value)
      .pipe(shareReplay(1));
    this.contractsLogicService
      .getRealEstateOwner(e.event.value)
      .subscribe((res) => {
        this.formControl('contractParties', 'name').setValue(res.name);
        this.formControl('contractParties', 'nationalId').setValue(
          res.ownerNationalId
        );
      });
  }

  onPropertyChange(e: any) {
    this.subs.add = this.propertiesOptions$.subscribe(
      (res) =>
        (this.unitNumber = +res.find((unit) => unit.id === e.event.value)
          .propertyNumber)
    );
  }

  onServicesChange(e) {
    this.formControl('financialDetails', 'selectedGasOption').reset();
    this.formControl('financialDetails', 'selectedElectricityOption').reset();
    this.formControl('financialDetails', 'selectedWaterOption').reset();
    this.formControl('financialDetails', 'electricityFixedFees').reset();
    this.formControl('financialDetails', 'electricityConsumption').reset();
    this.formControl('financialDetails', 'gasFixedFees').reset();
    this.formControl('financialDetails', 'gasConsumption').reset();
    this.formControl('financialDetails', 'waterFixedFees').reset();
    this.formControl('financialDetails', 'waterConsumption').reset();
  }

  onFeesValueChange(
    e: number,
    firstControl: FormControl,
    secondControl: FormControl
  ) {
    if (e === 1) {
      this.setControlsValiditions(firstControl, secondControl);
    } else {
      this.setControlsValiditions(secondControl, firstControl);
    }
  }

  setControlsValiditions(
    controlToAddValidation: FormControl,
    controlToRemoveValidation: FormControl
  ) {
    controlToAddValidation.addValidators([Validators.required]);
    controlToRemoveValidation.removeValidators([Validators.required]);
    controlToAddValidation.updateValueAndValidity();
    controlToRemoveValidation.updateValueAndValidity();
  }

  onTotalValueChange() {
    const totalValue =
      this.formControl('financialDetails', 'gasFixedFees').value +
      this.formControl('financialDetails', 'electricityFixedFees').value +
      this.formControl('financialDetails', 'waterFixedFees').value +
      this.formControl('financialDetails', 'annualRentalFees').value;
    this.formControl('financialDetails', 'totalValue').setValue(totalValue);
  }

  generateInstallmentPlanTable(
    issuingDate: Date,
    servicesFees: number,
    rentalFees: number,
    installmentPlan: PaymentWay
  ): Invoice[] {
    const invoices: Invoice[] = [];

    let currentIssuingDate = new Date(issuingDate);
    let currentDueDate = new Date(
      issuingDate.getTime() + 10 * 24 * 60 * 60 * 1000
    );

    let totalInvoiceValue: number;
    let numOfInstallments: number;
    let numOfDays: number;
    if (installmentPlan === PaymentWay.Monthly) {
      numOfInstallments = 12;
      numOfDays = 30000;
      totalInvoiceValue = (servicesFees + rentalFees) / 12;
    } else if (installmentPlan === PaymentWay.Quarterly) {
      numOfInstallments = 4;
      numOfDays = 90000;
      totalInvoiceValue = (servicesFees + rentalFees) / 4;
    } else if (installmentPlan === PaymentWay.SemiAnnual) {
      numOfInstallments = 2;
      numOfDays = 182000;
      totalInvoiceValue = (servicesFees + rentalFees) / 2;
    } else {
      numOfInstallments = 1;
      numOfDays = 365000;
      totalInvoiceValue = servicesFees + rentalFees;
    }

    invoices.push({
      issuingDate: currentIssuingDate,
      dueDate: currentDueDate,
      totalInvoiceValue: totalInvoiceValue,
      feesInvoiceValue: 0,
      rentInvoiceValue: 0,
    });

    for (let i = 1; i < numOfInstallments; i++) {
      currentIssuingDate = new Date(
        currentDueDate.getTime() + 1 * 24 * 60 * 60 * numOfDays
      );
      currentDueDate = new Date(
        currentIssuingDate.getTime() + 10 * 24 * 60 * 60 * 1000
      );

      invoices.push({
        issuingDate: currentIssuingDate,
        dueDate: currentDueDate,
        totalInvoiceValue: totalInvoiceValue,
        feesInvoiceValue: 0,
        rentInvoiceValue: 0,
      });
    }
    console.log(invoices);
    return invoices;
  }

  onSelection(e: StepperSelectionEvent) {
    // if (e.previouslySelectedIndex > e.selectedIndex) {
    //   e.previouslySelectedStep.interacted = false;
    // }
    this.selectedIndex = e.selectedIndex;
    console.log(this.selectedIndex);
    this.selectedIndex === 4 &&
      this.formControl('contractDuration', 'startDate')?.value &&
      this.formControl('financialDetails', 'annualRentalFees').value &&
      (this.installmentPlanTable = this.generateInstallmentPlanTable(
        new Date(this.formControl('contractDuration', 'startDate')?.value),
        this.formControl('financialDetails', 'annualRentalFees').value,
        this.formControl('financialDetails', 'gasFixedFees').value +
          this.formControl('financialDetails', 'electricityFixedFees').value +
          this.formControl('financialDetails', 'waterFixedFees').value,
        this.formControl('financialDetails', 'paymentWay').value
      ));
  }

  handleNext() {
    this.selectedIndex < 5 && this.selectedIndex++;
  }

  handleBack() {
    this.selectedIndex > 0 && this.selectedIndex--;
  }

  formControl(subForm: string, key: string) {
    return this.addEditContract?.get(subForm)?.get(key) as FormControl;
  }

  formGroup(key: string) {
    return this.addEditContract?.get(key) as FormGroup;
  }

  onAddContract(form: FormGroup) {
    console.log(form);
    const payload: ContractPayload = {
      startDate: form.value.contractDuration.startDate,
      endDate: form.value.contractDuration.endDate,
      rentalperiod: this.calculatedContractDuration.diffInDays,
      annualRentalFees: form.value.financialDetails.annualRentalFees,
      electricityFixedFees: form.value.financialDetails.electricityFixedFees,
      electricityConsumption: form.value.financialDetails.electricityFixedFees,
      gasFixedFees: form.value.financialDetails.gasFixedFees,
      gasConsumption: form.value.financialDetails.gasConsumption,
      waterFixedFees: form.value.financialDetails.waterFixedFees,
      waterConsumption: form.value.financialDetails.waterConsumption,
      totalValue: form.value.financialDetails.totalValue,
      insuranceAmount: form.value.financialDetails.insuranceAmount,
      commissionAmount: form.value.financialDetails.commissionAmount,
      paymentWay: form.value.financialDetails.paymentWay,
      contractType: ContractType.Commercial,
      totalTaxesAmount: 50,
      propertyId: form.value.propertyUnitDetails.propertyId,
      installment: this.installmentPlanTable,
      tenantData: {
        name: form.value.contractParties.name,
        tenantNationalId: form.value.contractParties.tenantNationalId,
        telephone: form.value.contractParties.tenantTelephone,
        birthDay: form.value.contractParties.tenantBirthDay,
        email: form.value.contractParties.email,
      },
    };
    this.contractsLogicService.createContract(payload).subscribe(
      (res) => {
        this.toastrService.showToastr(
          'Contract Created successfully',
          ToastrTypes.success
        );
        this.router.navigateByUrl('/contracts');
      },
      () => {
        this.toastrService.showToastr(
          `An error occured when executing the create statement ,try again !`,
          ToastrTypes.error
        );
      }
    );

    // const payload = {
    //   ...form.value,
    //   realEstateAttachments: this.realEstateAttachments,
    // };
    // !this.editMode
    //   ? this.propertyLogicService.createRealEstate(payload).subscribe(
    //       (res) => {
    //         this.toastrService.showToastr(
    //           'Real Estate Created successfully',
    //           ToastrTypes.success
    //         );
    //         this.router.navigateByUrl('/property');
    //       },
    //       () => {
    //         this.toastrService.showToastr(
    //           `An error occured when executing the create statement ,try again !`,
    //           ToastrTypes.error
    //         );
    //       }
    //     )
    //   : this.editRealEstate();
  }

  editRealEstate() {
    // const payload = {
    //   ...this.addEditContract.value,
    //   realEstateAttachments: this.realEstateAttachments,
    // };
    // this.propertyLogicService.editRealEstate(payload).subscribe((res) => {
    //   this.toastrService.showToastr(
    //     'Real Estate Updated Successfully',
    //     ToastrTypes.success
    //   );
    //   this.router.navigateByUrl('/property');
    // });
  }

  get InputTypes() {
    return InputTypes;
  }

  get PaymentWay() {
    return PaymentWay;
  }

  get Lang() {
    return Lang;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
