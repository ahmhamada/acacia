import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RtlDirDirective } from './directives/rtl/rtl-dir.directive';
import { MaterialModule } from './material/material.module';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { TranslateModule } from '@ngx-translate/core';
import { DataTableComponent } from './components/data-table/data-table.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { LocaleDatePickerComponent } from './components/locale-date-picker/locale-date-picker.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { LookupsService } from './services/lookups/lookups.service';
import { AttachmentsService } from './services/attachments/attchments.service';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';

@NgModule({
  declarations: [
    RtlDirDirective,
    InputFieldComponent,
    ErrorMessageComponent,
    FormInputComponent,
    DataTableComponent,
    EmptyStateComponent,
    LocaleDatePickerComponent,
    UploadFileComponent,
    ConfirmDialogComponent,
    FileUploaderComponent,
  ],
  imports: [CommonModule, TranslateModule, MaterialModule, ReactiveFormsModule],
  exports: [
    TranslateModule,
    MaterialModule,
    RtlDirDirective,
    InputFieldComponent,
    ReactiveFormsModule,
    ErrorMessageComponent,
    FormInputComponent,
    DataTableComponent,
    EmptyStateComponent,
    LocaleDatePickerComponent,
    UploadFileComponent,
    ConfirmDialogComponent,
    FileUploaderComponent,
  ],
  providers: [LookupsService, AttachmentsService],
})
export class SharedModule {}
