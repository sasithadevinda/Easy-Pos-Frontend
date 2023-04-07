import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeecurityRoutingModule } from './seecurity-routing.module';
import { SeecurityComponent } from './seecurity.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { SecurityHeaderComponent } from './components/security-header/security-header.component';


@NgModule({
  declarations: [
    SeecurityComponent,
    LoginComponent,
    SignupComponent,
    SecurityHeaderComponent
  ],
  imports: [
    CommonModule,
    SeecurityRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class SeecurityModule { }
