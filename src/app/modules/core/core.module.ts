import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { HttpClientModule } from '@angular/common/http'
import { HttpClient } from '@angular/common/http'
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ContentLayoutComponent } from './components/content-layout/content-layout.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MenuItemsComponent } from './components/menu-items/menu-items.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { DynamicLoaderComponent } from './components/dynamic-loader/dynamic-loader.component';
import { TranslationService } from './services/translation/translation.service';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    ContentLayoutComponent,
    SideNavComponent,
    MenuItemsComponent,
    DynamicLoaderComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
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
    TranslateModule,
    DynamicLoaderComponent,
  ],
  providers: [
    TranslationService,
  ]
})
export class CoreModule { }

function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json')
}
