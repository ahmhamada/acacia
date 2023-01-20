import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RtlDirDirective } from './directives/rtl/rtl-dir.directive';
import { MaterialModule } from './material/material.module'



@NgModule({
  declarations: [
    RtlDirDirective
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MaterialModule,
  ],
  exports: [
    TranslateModule,
    MaterialModule,
    RtlDirDirective
  ]
})
export class SharedModule { }
