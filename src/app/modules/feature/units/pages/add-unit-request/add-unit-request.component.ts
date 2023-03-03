import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { InputTypes } from 'src/app/modules/shared/enums/form-input-types.enum';
import { UnitsLogicService } from '../../services/units-logic/units-logic.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable, shareReplay } from 'rxjs';
import { map } from 'rxjs/operators';
import { TranslationService } from 'src/app/modules/core/services/translation/translation.service';
import { Subscriptions } from 'src/app/modules/shared/utils/subscriptions';
import { Lang } from 'src/app/modules/core/enums/lang.enum';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'src/app/modules/shared/services/toastr/toastr.service';
import { ToastrTypes } from 'src/app/modules/shared/enums/toastrTypes';
import { LookupsService } from 'src/app/modules/shared/services/lookups/lookups.service';
import { AttachmentsService } from 'src/app/modules/shared/services/attachments/attchments.service';

@Component({
  selector: 'add-unit-request',
  templateUrl: './add-unit-request.component.html',
  styleUrls: ['./add-unit-request.component.scss'],
})
export class AddUnitRequestComponent implements OnInit, OnDestroy {
  addUnitRequest!: FormGroup;
  currentLang!: string;
  subs = new Subscriptions();
  contractsOptions$!: any;
  handingOverFormFields = [];
  // isCommercialContract = false;

  constructor(
    private fb: FormBuilder,
    private unitsLogicService: UnitsLogicService,
    private translationService: TranslationService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.addUnitRequest = this.fb.group({
      contractId: [null, [Validators.required]],
      tenantName: [''],
      tenantId: [null],
      ownerName: [''],
      ownerId: [null],
      items: this.fb.array([]),
    });

    this.contractsOptions$ = this.unitsLogicService
      .getContractsLookup()
      .pipe(shareReplay(1));

    // this.activatedRoute.queryParams.subscribe((params) => {
    //   this.isCommercialContract = params['isCommercial'];
    // });
  }

  ngOnInit(): void {
    this.subs.add = this.translationService.currentLanguage$.subscribe(
      (language) => {
        this.currentLang = language;
        this.handleAddHandingFields();
        console.log(this.addUnitRequest.value);
      }
    );
  }

  onContractSelectionChange(e: any) {
    // this.areas$ =
    this.unitsLogicService
      .getHandOverContractData(e.event.value)
      .subscribe((res) => {
        this.addUnitRequest.patchValue({
          tenantName: [res.tenantName],
          tenantId: [res.tenantNationalId],
          ownerName: [res.ownerName],
          ownerId: [res.ownerNationalId],
          contractId: e.event.value,
        });
      });
  }

  onFieldChange(e: number, item: any) {
    if (e === 1) {
      item.reset();
      // this.formArrayControl(index, 'fixFess').setValue('');
    }
  }

  handleCancel() {
    // this.isCommercialContract
    //   ? this.router.navigate(['/contracts/commercial'], {
    //       queryParams: { isCommercial: true },
    //     })
    //   : this.router.navigateByUrl('/contracts/residential');
    this.router.navigateByUrl('/units/handing');
  }

  handleAddHandingFields() {
    this.handingOverFormFields = [];
    this.unitsLogicService.getHandingOverForm().subscribe((res) => {
      res.map((field: any) => {
        this.handingOverFormFields.push(
          this.fb.group({
            item: [field.item],
            acceptance: [null, [Validators.required]],
            note: [''],
            fixFees: [null],
          })
        );
      });
      this.addUnitRequest.setControl(
        'items',
        this.fb.array(this.handingOverFormFields) || []
      );
      console.log(this.addUnitRequest);
    });
  }

  get items() {
    return this.addUnitRequest.get('items') as FormArray;
  }

  formControl(key: string) {
    return this.addUnitRequest?.get(key) as FormControl;
  }

  formArrayControl(index: number, key: string) {
    return this.items?.controls[index].get(key) as FormControl;
  }

  onAddRequest(form: FormGroup) {
    let newItems = [];
    form.value.items.map((item) => {
      newItems.push({
        item: item.item,
        acceptance: item.acceptance === 1 ? true : false,
        note: item.note,
        fixFees: item.fixFees?.toString() || null,
      });
    });
    const payload = {
      items: newItems,
      contractId: form.value.contractId,
    };
    console.log(payload);
    this.unitsLogicService.addHandOverForm(payload).subscribe(
      (res) => {
        this.toastrService.showToastr(
          'Hand Over Request Created successfully',
          ToastrTypes.success
        );
        this.router.navigateByUrl('/contracts/residential');
      },
      () => {
        this.toastrService.showToastr(
          `An error occured when executing the create statement ,try again !`,
          ToastrTypes.error
        );
      }
    );
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
