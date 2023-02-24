import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Method } from 'src/app/modules/core/enums/method.enum';
import { XhrService } from 'src/app/modules/core/services/xhr/xhr.service';

@Injectable()
export class AttachmentsService {
  constructor(private xhrService: XhrService) {}

  uploadAttachments(attachment: any) {
    return this.xhrService
      .call(
        {
          url: '/api/Attachment/Upload',
          method: Method.post,
          body: attachment,
        },
        true
      )
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  downloadAttachments(attachment: string) {
    return this.xhrService
      .call({
        url: `api/Attachment/Download?fileName=${attachment}`,
        method: Method.post,
        body: {},
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
