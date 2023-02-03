import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { RegisterComponent } from './pages/register/register.component';
import { AccountLayoutComponent } from './components/account-layout/account-layout.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ConfirmEmailComponent } from './pages/confirm-email/confirm-email.component';
import { MaterialModule } from '../../shared/material/material.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AccountLayoutComponent,
    ForgotPasswordComponent,
    ConfirmEmailComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
    MaterialModule,
  ]
})
export class AccountModule { }
