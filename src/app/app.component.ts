import { Component } from '@angular/core';
import { LoaderService } from './modules/shared/services/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'acacia-p3';

  constructor(public loaderService: LoaderService) { }

}
