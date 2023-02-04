import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RtlDirDirective } from './directives/rtl/rtl-dir.directive';
import { MaterialModule } from './material/material.module';
import { InputFieldComponent } from './components/input-field/input-field.component'
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import {TranslateModule} from '@ngx-translate/core';
import { DataTableComponent } from './components/data-table/data-table.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component'

@NgModule({
  declarations: [
    RtlDirDirective,
    InputFieldComponent,
    ErrorMessageComponent,
    FormInputComponent,
    DataTableComponent,
    EmptyStateComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    TranslateModule,
    MaterialModule,
    RtlDirDirective,
    InputFieldComponent,
    ReactiveFormsModule,
    ErrorMessageComponent,
    FormInputComponent,
    DataTableComponent,
    EmptyStateComponent
  ]
})
export class SharedModule { }
