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
import { PaymentWay } from '../../../../shared/enums/payment-way.enum';
import { ContractType } from '../../enums/contract-type.enum';
import {
  exceedValueValidator,
  numbersOnlyValidator,
  tenDigitValidator,
} from 'src/app/modules/shared/utils/custom-validator';
import { ContractPayload } from '../../_models/contract-payload.model';
import { generateDateDuration } from 'src/app/modules/shared/utils/generate-date-duration';
import { generateInstallmentPlanTable } from 'src/app/modules/shared/utils/generate-installment-table';
import { AttachmentsService } from 'src/app/modules/shared/services/attachments/attchments.service';
import { CalculatedContractDuration } from '../../_models/calculated-contract-duration.model';
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
  calculatedContractDuration: CalculatedContractDuration;
  realEstateName: string;
  unitNumber: number;
  installmentPlanTable = [];
  isCommercialContract = false;
  attachment: any;
  allowedTypes = ['pdf', 'png', 'jpeg', 'tiff'];

  constructor(
    private fb: FormBuilder,
    private contractsLogicService: ContractsLogicService,
    private translationService: TranslationService,
    breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private lookupsService: LookupsService,
    private attchmentsService: AttachmentsService
  ) {
    this.addEditContract = this.fb.group({
      contractDuration: this.fb.group({
        startDate: ['', [Validators.required]],
        endDate: ['', [Validators.required]],
        rentalperiod: [null],
        attachment: ['', [Validators.required]],
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
          [Validators.required, numbersOnlyValidator(), tenDigitValidator()],
        ],
        tenantBirthDay: ['', [Validators.required]],
        tenantTelephone: [
          null,
          [Validators.required, , numbersOnlyValidator(), tenDigitValidator()],
        ],
        email: ['', [Validators.required, Validators.email]],
        idPhoto: ['', [Validators.required]],
        vat: [null],
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
          totalTaxesAmount: [0],
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

    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state;
    this.isCommercialContract = state ? state['isCommercialContract'] : false;

    this.activatedRoute.queryParams.subscribe((params) => {
      this.isCommercialContract = params['isCommercial'];
    });

    this.isCommercialContract && this.addCommercialContractControls();

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
      this.calculatedContractDuration = generateDateDuration(
        new Date(e.startValue),
        new Date(e.endValue)
      );
    }
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
      this.formControl('financialDetails', 'annualRentalFees').value +
      this.formControl('financialDetails', 'totalTaxesAmount').value;
    this.formControl('financialDetails', 'totalValue').setValue(totalValue);
  }

  onAnnualFeesValueChange() {
    if (this.isCommercialContract) {
      const taxRate = 0.15;
      this.formControl('financialDetails', 'totalTaxesAmount').setValue(
        this.formControl('financialDetails', 'annualRentalFees').value * taxRate
      );
      this.onTotalValueChange();
    } else {
      this.onTotalValueChange();
    }
  }

  onSelection(e: StepperSelectionEvent) {
    // if (e.previouslySelectedIndex > e.selectedIndex) {
    //   e.previouslySelectedStep.interacted = false;
    // }
    this.selectedIndex = e.selectedIndex;
    this.selectedIndex === 4 &&
      this.formControl('financialDetails', 'annualRentalFees').value &&
      this.formControl('contractDuration', 'startDate')?.value &&
      (this.installmentPlanTable = generateInstallmentPlanTable(
        new Date(this.formControl('contractDuration', 'startDate')?.value),
        this.formControl('financialDetails', 'annualRentalFees').value,
        this.formControl('financialDetails', 'gasFixedFees').value +
          this.formControl('financialDetails', 'electricityFixedFees').value +
          this.formControl('financialDetails', 'waterFixedFees').value,
        this.formControl('financialDetails', 'paymentWay').value,
        this.calculatedContractDuration.monthDifference,
        this.formControl('financialDetails', 'totalTaxesAmount').value
      ));
  }

  handleNext() {
    this.selectedIndex < 5 && this.selectedIndex++;
    console.log(this.addEditContract.value);
  }

  handleBack() {
    this.selectedIndex > 0 && this.selectedIndex--;
  }

  handleCancel() {
    this.isCommercialContract
      ? this.router.navigate(['/contracts/commercial'], {
          queryParams: { isCommercial: true },
        })
      : this.router.navigateByUrl('/contracts/residential');
  }

  formControl(subForm: string, key: string) {
    return this.addEditContract?.get(subForm)?.get(key) as FormControl;
  }

  formGroup(key: string) {
    return this.addEditContract?.get(key) as FormGroup;
  }

  onAddContract(form: FormGroup) {
    const payload: ContractPayload = {
      startDate: form.value.contractDuration.startDate,
      endDate: form.value.contractDuration.endDate,
      rentalperiod: this.calculatedContractDuration.diffInDays,
      annualRentalFees: form.value.financialDetails.annualRentalFees,
      electricityFixedFees:
        this.formControl('financialDetails', 'selectedElectricityOption')
          .value === 1
          ? form.value.financialDetails.electricityFixedFees
          : null,
      electricityConsumption:
        this.formControl('financialDetails', 'selectedElectricityOption')
          .value === 2
          ? form.value.financialDetails.electricityConsumption
          : null,
      attachment: form.value.contractDuration.attachment,
      gasFixedFees:
        this.formControl('financialDetails', 'selectedGasOption').value === 1
          ? form.value.financialDetails.gasFixedFees
          : null,
      gasConsumption:
        this.formControl('financialDetails', 'selectedGasOption').value === 2
          ? form.value.financialDetails.gasConsumption
          : null,
      waterFixedFees:
        this.formControl('financialDetails', 'selectedWaterOption').value === 1
          ? form.value.financialDetails.waterFixedFees
          : null,
      waterConsumption:
        this.formControl('financialDetails', 'selectedWaterOption').value === 2
          ? form.value.financialDetails.waterConsumption
          : null,
      totalValue: form.value.financialDetails.totalValue,
      insuranceAmount: form.value.financialDetails.insuranceAmount,
      commissionAmount: form.value.financialDetails.commissionAmount,
      paymentWay: form.value.financialDetails.paymentWay,
      contractType: this.isCommercialContract
        ? ContractType.Commercial
        : ContractType.Residential,
      totalTaxesAmount: form.value.financialDetails.totalTaxesAmount
        ? form.value.financialDetails.totalTaxesAmount
        : null,
      propertyId: form.value.propertyUnitDetails.propertyId,
      installment: this.installmentPlanTable,
      tenantData: {
        name: form.value.contractParties.name,
        tenantNationalId: form.value.contractParties.tenantNationalId,
        telephone: form.value.contractParties.tenantTelephone,
        birthDay: form.value.contractParties.tenantBirthDay,
        email: form.value.contractParties.email,
        idPhoto: form.value.contractParties.idPhoto,
        vat: form.value.contractParties.vat
          ? form.value.contractParties.vat
          : '',
      },
    };
    this.contractsLogicService.createContract(payload).subscribe(
      (res) => {
        this.toastrService.showToastr(
          'Contract Created successfully',
          ToastrTypes.success
        );
        this.isCommercialContract
          ? this.router.navigate(['/contracts/commercial'], {
              queryParams: { isCommercial: true },
            })
          : this.router.navigateByUrl('/contracts/residential');
      },
      () => {
        this.toastrService.showToastr(
          `An error occured when executing the create statement ,try again !`,
          ToastrTypes.error
        );
      }
    );
  }

  addCommercialContractControls() {
    this.formControl('contractParties', 'vat').setValidators(
      Validators.required
    );
    this.formControl('financialDetails', 'totalTaxesAmount').setValidators(
      Validators.required
    );
  }

  onContractFileChange(selectedFiles: any, type: number) {
    this.attachment = {};
    const formData = new FormData();
    const file = selectedFiles[0];
    formData.append('Attachment', file, file.name);
    this.attachment = formData;
    this.attchmentsService
      .uploadAttachments(this.attachment)
      .subscribe((res) => {
        type === 1
          ? this.addEditContract
              .get('contractDuration')
              ?.get('attachment')
              ?.patchValue(res.fileName)
          : this.addEditContract
              .get('contractParties')
              ?.get('idPhoto')
              ?.patchValue(res.fileName);
      });
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
