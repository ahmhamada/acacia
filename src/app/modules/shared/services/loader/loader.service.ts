import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private isLoading = new Subject<boolean>()
  isLoading$ = this.isLoading.asObservable()

  constructor() {}

  show() {
    this.isLoading.next(true)
  }

  hide() {
    this.isLoading.next(false)
  }

}
