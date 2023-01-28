import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/feature/account/pages/login/login.component';
import { ContentLayoutComponent } from './modules/core/components/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/feature/account/account.module').then(m => m.AccountModule)
  }
  , {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: 'property',
        loadChildren: () =>
          import('./modules/feature/property/property.module').then(
            (m) => m.PropertyModule
          ),
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
