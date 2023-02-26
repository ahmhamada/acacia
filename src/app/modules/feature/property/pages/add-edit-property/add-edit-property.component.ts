import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { InputTypes } from 'src/app/modules/shared/enums/form-input-types.enum';
import { PropertyLogicService } from '../../services/property-logic/property-logic.service';
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

import { AttachmentsService } from 'src/app/modules/shared/services/attachments/attchments.service';

import { ToastrTypes } from 'src/app/modules/shared/enums/toastrTypes';

@Component({
  selector: 'app-add-edit-property',
  templateUrl: './add-edit-property.component.html',
  styleUrls: ['./add-edit-property.component.scss'],
})
export class AddEditPropertyComponent implements OnInit, OnDestroy {
  addEditProperty!: FormGroup;
  currentLang!: string;
  stepperOrientation: Observable<StepperOrientation>;
  selectedIndex: number = 0;
  allowedTypes = ['pdf', 'png', 'jpeg', 'tiff'];
  areas$: any;
  districts$: any;
  subs = new Subscriptions();
  editMode: boolean = false;
  oldDocumentAttachments: any[] = [];
  oldAttachments: any[] = [];
  attachment: any;
  propertyTypes$!: any;
  propertyUsageTypes$!: any;
  unitUsages$!: any;
  unitTypes$!: any;
  documentTypes$!: any;
  cities$!: any;
  realEstateAttachments: any[] = [];
  realestateId: any;
  constructor(
    private fb: FormBuilder,
    private propertyLogicService: PropertyLogicService,
    private translationService: TranslationService,
    breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private attchmentsService: AttachmentsService
  ) {
    this.addEditProperty = this.fb.group({
      propertyDocument: this.fb.group({
        documentTypeId: [null, [Validators.required]],
        documentNumber: ['', [Validators.required]],
        releaseDate: ['', [Validators.required]],
        attachment: ['', [Validators.required]],
        id: [null],
      }),
      owner: this.fb.group({
        name: ['', [Validators.required]],
        ownerNationalId: [null, [Validators.required]],
        ownerBirthDay: ['', [Validators.required]],
        districtId: ['', [Validators.required]],
        city: [''],
        area: [''],
        id: [null],
      }),
      realEstateDetails: this.fb.group({
        name: ['', [Validators.required]],
        realEstateNumber: ['', [Validators.required]],
        numOfFloors: [null, [Validators.required]],
        numOfProperty: [null, [Validators.required]],
        address: ['', [Validators.required]],
        buildingNumber: ['', [Validators.required]],
        addationalNumber: ['', [Validators.required]],
        buildDate: ['', [Validators.required]],
        realEstateTypeId: [null, [Validators.required]],
        realEstateUseId: [null, [Validators.required]],
        id: [null],
      }),
      properties: this.fb.array([this.handelCreateUnit()]),
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
        this.propertyTypes$ = this.propertyLogicService
          .getPropertyLookup('RealEstateType')
          .pipe(shareReplay(1));
        this.propertyUsageTypes$ = this.propertyLogicService
          .getPropertyLookup('RealEstateUse')
          .pipe(shareReplay(1));
        this.documentTypes$ = this.propertyLogicService
          .getDocumentTypes()
          .pipe(shareReplay(1));
        this.cities$ = this.propertyLogicService
          .getPropertyLookup('city')
          .pipe(shareReplay(1));
        this.unitUsages$ = this.propertyLogicService
          .getPropertyLookup('PropertyUse')
          .pipe(shareReplay(1));
        this.unitTypes$ = this.propertyLogicService
          .getPropertyLookup('PropertyType')
          .pipe(shareReplay(1));
      }
    );
    this.realestateId && this.getRealEstateInfo();
  }

  onLogoChange(selectedFiles: any) {
    this.attachment = {};
    const formData = new FormData();
    const file = selectedFiles[0];
    formData.append('Attachment', file, file.name);
    this.attachment = formData;
    this.attchmentsService
      .uploadAttachments(this.attachment)
      .subscribe((res) => {
        this.addEditProperty
          .get('propertyDocument')
          ?.get('attachment')
          ?.patchValue(res.fileName);
      });
  }

  getRealEstateInfo() {
    this.propertyLogicService
      .getRealEstateById(this.realestateId)
      .subscribe((res: any) => {
        this.addEditProperty.patchValue(res);
        this.oldDocumentAttachments = [
          ...this.oldDocumentAttachments,
          {
            attachment: res.propertyDocument.attachment,
            id: 1,
          }
        ];
        res.realEstateAttachments?.map((attachment: any) => {
          this.realEstateAttachments.push(attachment.attachment);
        });
        this.oldAttachments = res.realEstateAttachments;
        this.areas$ = this.propertyLogicService
          .getCityAreas(res.owner.city)
          .pipe(shareReplay(1));
        this.districts$ = this.propertyLogicService
          .getAreaDistricts(res.owner.area)
          .pipe(shareReplay(1));
      });
  }

  onAttachmentsChange(selectedFiles: any) {
    this.realEstateAttachments = [];
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      this.attachment = {};
      const file = selectedFiles[i];
      formData.append('Attachment', file, file.name);
      this.attachment = formData;
      this.attchmentsService
        .uploadAttachments(this.attachment)
        .subscribe((res) => {
          this.realEstateAttachments.push(res.fileName);
        });
    }
  }

  onCityChange(e: any) {
    this.formControl('owner', 'area').reset();
    this.formControl('owner', 'districtId').reset();
    this.areas$ = this.propertyLogicService
      .getCityAreas(e.event.value)
      .pipe(shareReplay(1));
  }

  onDistrictChange(e: any) {
    this.formControl('owner', 'districtId').reset();
    this.districts$ = this.propertyLogicService
      .getAreaDistricts(e.event.value)
      .pipe(shareReplay(1));
  }

  onSelection(e: StepperSelectionEvent) {
    // if (e.previouslySelectedIndex > e.selectedIndex) {
    //   e.previouslySelectedStep.interacted = false;
    // }
    this.selectedIndex = e.selectedIndex;
  }

  get properties() {
    return this.addEditProperty.get('properties') as FormArray;
  }

  handelCreateUnit() {
    return this.fb.group({
      id: [null],
      propertyNumber: ['', [Validators.required]],
      propertyTypeId: ['', [Validators.required]],
      propertyUseId: ['', [Validators.required]],
      floorNumber: ['', [Validators.required]],
      area: ['', [Validators.required]],
      buildDate: ['', [Validators.required]],
      propertyFinish: ['', [Validators.required]],
      roomsNo: [null, [Validators.required]],
      furnished: [false, [Validators.required]],
      furnishedType: [''],
      hasDressing: [false, [Validators.required]],
      hasKitchen: [false, [Validators.required]],
      hasGasMeter: [false, [Validators.required]],
      hasElectricityMeter: [false, [Validators.required]],
      hasWaterMeter: [false, [Validators.required]],
      bedRoomsNo: [null, [Validators.required]],
      bathroomsNo: [null, [Validators.required]],
      hallNo: [null, [Validators.required]],
      maidRoomNumber: [null, [Validators.required]],
      kitchenNo: [null, [Validators.required]],
      storesNo: [null, [Validators.required]],
      backyardNo: [null, [Validators.required]],
      livingRoomNo: [null, [Validators.required]],
      centralAirConditionNumber: [null, [Validators.required]],
      airConditionNumber: [null, [Validators.required]],
      desertAirConditionNumber: [null, [Validators.required]],
    });
  }

  handleAddUnit() {
    this.properties.push(this.handelCreateUnit());
  }

  handleRemoveUnit(index: number, unitId: any) {
    const dialogData: ConfirmationDialog = {
      title: `ACTIONS.DELETE_UNIT`,
      message: 'LABELS.FORM.ARE_YOU_SURE',
      actionLabel: 'ACTIONS.DELETE',
      itemIndex: index + 1,
    };
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '550px',
      minWidth: '500px',
      data: dialogData,
    });
    return dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        unitId === ' '
          ? this.properties.removeAt(index)
          : this.onDeleteUnit(index, unitId);
      } else {
        return res;
      }
    });
  }

  onDeleteUnit(index: number, unitId: number) {
    this.properties.removeAt(index);
    this.propertyLogicService.deleteUnit(unitId).subscribe((res) => {
      this.properties.removeAt(index);
    });
  }

  handleNext() {
    this.selectedIndex < 5 && this.selectedIndex++;
  }

  handleBack() {
    this.selectedIndex > 0 && this.selectedIndex--;
  }

  handleCancel() {
    this.router.navigateByUrl('/property');
  }

  formControl(subForm: string, key: string) {
    return this.addEditProperty?.get(subForm)?.get(key) as FormControl;
  }

  formArrayControl(index: number, key: string) {
    return this.properties?.controls[index].get(key) as FormControl;
  }

  formGroup(key: string) {
    return this.addEditProperty?.get(key) as FormGroup;
  }

  onAddProperty(form: FormGroup) {
    const payload = {
      ...form.value,
      realEstateAttachments: this.realEstateAttachments,
    };
    !this.editMode
      ? this.propertyLogicService.createRealEstate(payload).subscribe(
          (res) => {
            this.toastrService.showToastr(
              'Real Estate Created successfully',
              ToastrTypes.success
            );
            this.router.navigateByUrl('/property');
          },
          () => {
            this.toastrService.showToastr(
              `An error occured when executing the create statement ,try again !`,
              ToastrTypes.error
            );
          }
        )
      : this.editRealEstate();
  }

  editRealEstate() {
    const payload = {
      ...this.addEditProperty.value,
      realEstateAttachments: this.realEstateAttachments,
    };
    this.propertyLogicService.editRealEstate(payload).subscribe((res) => {
      this.toastrService.showToastr(
        'Real Estate Updated Successfully',
        ToastrTypes.success
      );
      this.router.navigateByUrl('/property');
    });
  }

  get InputTypes() {
    return InputTypes;
  }

  get Lang() {
    return Lang;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
