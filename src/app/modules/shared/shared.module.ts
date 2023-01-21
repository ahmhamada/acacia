import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RtlDirDirective } from './directives/rtl/rtl-dir.directive';
import { MaterialModule } from './material/material.module';
import { InputFieldComponent } from './components/input-field/input-field.component'
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RtlDirDirective,
    InputFieldComponent
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
    ReactiveFormsModule
  ]
})
export class SharedModule { }
