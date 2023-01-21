import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/account/pages/login/login.component';
import { ContentLayoutComponent } from './modules/core/components/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule)
  }
  // , {
  //   path: '',
  //   component: ContentLayoutComponent,
  //   children: [
  //     {
  //       title: 'login',
  //       path: '',
  //       component: LoginComponent
  //     }
  //   ]
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
