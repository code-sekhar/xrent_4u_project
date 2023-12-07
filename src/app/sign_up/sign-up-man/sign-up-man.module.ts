import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpManRoutingModule } from './sign-up-man-routing.module';
import { SignUpManComponent } from './sign-up-man/sign-up-man.component';


@NgModule({
  declarations: [
    SignUpManComponent,

  ],
  imports: [
    CommonModule,
    SignUpManRoutingModule
  ]
})
export class SignUpManModule { }
