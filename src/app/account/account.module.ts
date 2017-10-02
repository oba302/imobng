import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

import { AccountRoutingModule } from './account-routing.module';
import { RegisterComponent } from './register/register.component';
import { ActivationComponent } from './activation/activation.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AccountRoutingModule, 
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ActivationComponent,
  ],
  providers: [
    
  ]
})
export class AccountModule { }
