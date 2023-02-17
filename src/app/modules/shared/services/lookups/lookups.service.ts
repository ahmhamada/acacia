import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Method } from 'src/app/modules/core/enums/method.enum';
import { XhrService } from 'src/app/modules/core/services/xhr/xhr.service';

@Injectable()
export class LookupsService {
  constructor(private xhrService: XhrService) {}

  getPropertyLookup(lookup: string) {
    return this.xhrService
      .call({
        url: `api/${lookup}/Get`,
        method: Method.get,
        body: {},
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
