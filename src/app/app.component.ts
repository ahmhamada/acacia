import { Component } from '@angular/core';
import { Lang } from './modules/core/enums/lang.enum';
import { TranslationService } from './modules/core/services/translation/translation.service';
import { LoaderService } from './modules/shared/services/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Acacia';

  constructor(
    public loaderService: LoaderService,
    private translationService: TranslationService
  ) {
    if (!localStorage.getItem(Lang.DEFAULT_LANGUAGE)) {
      localStorage.setItem(Lang.DEFAULT_LANGUAGE, Lang.arabic);
    }
    this.translationService.setLanguage(
      localStorage.getItem(Lang.DEFAULT_LANGUAGE) as string
    );
  }
}
