// Modules
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { ContentLayoutComponent } from './components/content-layout/content-layout.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MenuItemsComponent } from './components/menu-items/menu-items.component';
import { DynamicLoaderComponent } from './components/dynamic-loader/dynamic-loader.component';

// Services
import { TranslationService } from './services/translation/translation.service';


@NgModule({
  declarations: [
    ContentLayoutComponent,
    SideNavComponent,
    MenuItemsComponent,
    DynamicLoaderComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  exports: [
    // TranslateModule,
    DynamicLoaderComponent,
  ],
  providers: [
    TranslationService,
    TranslateModule

  ]
})
export class CoreModule { }

function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json')
}
