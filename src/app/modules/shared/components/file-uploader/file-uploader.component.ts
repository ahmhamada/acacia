import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent implements OnInit {
  @Input() multiple = false;
  @Input() files: File[] = [];
  @Output() filesChange = new EventEmitter<File[]>();

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  public dragOver = false;

  constructor() {}

  ngOnInit(): void {
    this.handleEditCase();
  }

  public onFileSelected(event: Event): void {
    const files = (event.target as HTMLInputElement).files;
    this.addFiles(files);
  }

  public onFilesDropped(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    this.dragOver = false;

    const files = event.dataTransfer?.files;
    this.addFiles(files);
  }

  public onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    this.dragOver = true;
  }

  public onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    this.dragOver = false;
  }

  public removeFile(index: number): void {
    this.files.splice(index, 1);
    this.filesChange.emit(this.files);
  }

  private addFiles(files: FileList | null): void {
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        this.files.push(file);
      }

      this.filesChange.emit(this.files);
    }
  }

  public getFileIcon(file: File | any) {
    if (file.type) {
      this.checkFileType(file.type);
    } else {
      const ext = file?.split('.')[1];
      ext === 'pdf'
        ? this.checkFileType('application/' + ext)
        : this.checkFileType('image/' + ext);
    }
  }

  checkFileType(type) {
    if (type === 'application/pdf') {
      return 'assets/images/pdf.png';
    } else if (
      type === 'image/png' ||
      type === 'image/tiff' ||
      type === 'image/jpeg' ||
      type === 'image/jpg'
    ) {
      return 'assets/images/photo-icon.png';
    } else {
      return 'assets/images/pdf.png';
    }
  }

  public getFilePreview(file: File): string {
    if (file.type === 'application/pdf') {
      return 'assets/images/pdf.png';
    } else if (
      file.type === 'image/png' ||
      file.type === 'image/tiff' ||
      file.type === 'image/jpeg' ||
      file.type === 'image/jpg'
    ) {
      return 'assets/images/photo-icon.png';
    } else {
      return '';
    }
  }

  public getFileName(file: File | any): string {
    if (file?.name) {
      return file?.name?.split('.')[0];
    } else {
      return file?.split('.')[0];
    }
  }

  public getFileSize(file: File): string {
    const bytes = file.size;
    const kb = bytes / 1024;
    const mb = kb / 1024;

    if (mb > 1) {
      return mb.toFixed(2) + ' MB';
    } else {
      return kb.toFixed(2) + ' KB';
    }
  }

  private handleEditCase(): void {
    // Handle edit case where there are existing files to be shown in the preview
    if (this.files && this.files.length > 0) {
      this.files.forEach((file) => {
        const reader = new FileReader();

        reader.onload = () => {
          file['preview'] = reader.result as string;
          this.filesChange.emit(this.files);
        };

        reader.readAsDataURL(file);
      });
    }
  }
}
