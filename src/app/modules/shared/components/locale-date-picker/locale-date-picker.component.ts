import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import 'moment/locale/ar';

@Component({
  selector: 'locale-date-picker',
  templateUrl: './locale-date-picker.component.html',
  styleUrls: ['./locale-date-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: LocaleDatePickerComponent,
      multi: true,
    },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class LocaleDatePickerComponent implements OnInit {
  @Input() label!: string;
  @Input() FormControl!: FormControl;
  @Input() isArabicDatePicker = false;

  constructor(
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string
  ) {}

  ngOnInit(): void {
    if (this.isArabicDatePicker) {
      this.arabic();
    }
  }

  writeValue(): void {}
  registerOnChange(): void {}
  registerOnTouched(): void {}

  arabic() {
    this._locale = 'ar';
    this._adapter.setLocale(this._locale);
  }

  get formControl() {
    return this.FormControl as FormControl;
  }
}
