import { FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  SimpleChanges,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: UploadFileComponent,
      multi: true,
    },
  ],
})
export class UploadFileComponent implements OnInit {
  message!: string;
  imgURL: any;
  @ViewChild('fileDropRef') fileDropRef!: ElementRef;
  selectedFiles: any[] = [];
  @Input() label!: string;
  @Input() singleFile = true;
  @Input() allowedTypes = ['png', 'jpg', 'jpeg', 'gif'];
  @Input() canAccept = 'image/*';
  previews: string[] = [];
  fileType!: string;
  errorType = '';
  @Input() editMode = false;
  @Output() onRemoveAttachment: EventEmitter<any> = new EventEmitter();
  @Input() oldAttachments: any[] = []; // attachment that is saved at backend and returned with the service response
  @Output() onAttachmentChange: EventEmitter<any> = new EventEmitter();
  @Input('formGroup') formGroup!: FormGroup;
  @Input('formControl') formControl!: FormControl;

  constructor() {}

  ngOnInit(): void {}

  checkType(file: File | any) {
    console.log(this.oldAttachments);

    this.fileType = file.type.split('/').pop().toLowerCase();
    if (this.allowedTypes.includes(this.fileType)) {
      this.errorType = '';
      return true;
    } else {
      this.errorType = 'notAllowedType';
      return false;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.oldAttachments);
    console.log(changes['oldDocumentAttachments'])
    if (this.editMode) {
      if (changes['oldAttachments'].previousValue !== undefined) {
        if (
          changes['oldAttachments'].previousValue !==
          changes['oldAttachments'].currentValue
        ) {
          if (this.oldAttachments) {
            this.selectedFiles = this.oldAttachments;
            if (this.singleFile) {
              this.imgURL = this.oldAttachments[0];
              console.log(this.imgURL);
            }
          }
        }
      }
    }
  }

  checkFile(file: any) {
    if (!file.type) {
      const fileType = file.attachment.split('.');
      if (fileType !== 'pdf') {
        return true;
      } else {
        return false;
      }
    } else {
      if (file.type !== 'application/pdf') {
        return true;
      } else {
        return false;
      }
    }
  }

  writeValue(): void {}
  registerOnChange(): void {}
  registerOnTouched(): void {}

  onFileSelected(event: any, type: number) {
    if (this.singleFile === true) {
      this.selectedFiles = [];
      let isFileValid = {};
      if (type === 1) {
        for (let index of event) {
          this.selectedFiles.push(index);
          isFileValid = this.checkType(event['0']);
        }
      } else {
        this.selectedFiles = event.target.files;
        if (this.selectedFiles.length) {
          isFileValid = this.checkType(event.target.files[0]);
        } else {
          this.imgURL = '';
        }
      }
      if (this.selectedFiles.length && isFileValid) {
        let reader = new FileReader();
        reader.readAsDataURL(this.selectedFiles[0]);
        reader.onload = (_event) => {
          this.imgURL = reader.result;
        };
      }
    } else {
      if (type === 1) {
        this.selectedFiles = event;
      } else {
        if (event.target.files.length > 0) {
          this.selectedFiles = [];
          Array.from(event.target.files).forEach((file: any) => {
            this.selectedFiles.push(file);
          });
        }
      }
    }
    this.onAttachmentChange.emit(this.selectedFiles);
    this.formControl?.markAsTouched();
    this.formControl?.markAsDirty();
    this.formControl?.setValue(this.selectedFiles);
  }

  emitValidFiles() {
    this.onAttachmentChange.emit(this.selectedFiles);
  }

  handleRemoveFile(index: number) {
    if (this.singleFile) {
      this.fileDropRef.nativeElement.value = '';
      this.imgURL = '';
    } else {
      if (this.selectedFiles[index].id) {
        this.onRemoveAttachment.emit({
          index: index,
          attachmentId: this.selectedFiles[index]?.id,
        });
      } else {
        const fileListArr = Array.from(this.selectedFiles);
        fileListArr.splice(index, 1);
        this.selectedFiles = fileListArr;
        this.onAttachmentChange.emit(this.selectedFiles);
      }
    }
    !this.selectedFiles.length && this.formControl?.reset();
    this.formControl?.markAsTouched();
    this.formControl?.markAsDirty();
  }
}
