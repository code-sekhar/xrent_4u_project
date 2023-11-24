import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcceptRoutingModule } from './accept-routing.module';
import { AcceptComponent } from './accept/accept.component';


@NgModule({
  declarations: [
    AcceptComponent
  ],
  imports: [
    CommonModule,
    AcceptRoutingModule
  ]
})
export class AcceptModule { }
