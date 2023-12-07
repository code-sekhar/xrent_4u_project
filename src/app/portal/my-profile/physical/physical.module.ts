import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhysicalRoutingModule } from './physical-routing.module';
import { PhysicalComponent } from './physical/physical.component';


@NgModule({
  declarations: [
    PhysicalComponent
  ],
  imports: [
    CommonModule,
    PhysicalRoutingModule
  ]
})
export class PhysicalModule { }
