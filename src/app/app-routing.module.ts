import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './modules/core/components/content-layout/content-layout.component';
import { LoginComponent } from './modules/core/pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        title: 'login',
        path: 'login',
        component: LoginComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
