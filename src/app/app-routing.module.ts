import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/feature/account/pages/login/login.component';
import { ContentLayoutComponent } from './modules/core/components/content-layout/content-layout.component';
import { AuthGuard } from './modules/core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/feature/account/account.module').then(
        (m) => m.AccountModule
      ),
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: 'property',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./modules/feature/property/property.module').then(
            (m) => m.PropertyModule
          ),
      },
      {
        path: 'contracts',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./modules/feature/contracts/contracts.module').then(
            (m) => m.ContractsModule
          ),
      },
      {
        path: 'units',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./modules/feature/units/units.module').then(
            (m) => m.UnitsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
