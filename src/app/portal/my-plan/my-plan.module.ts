import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPlanRoutingModule } from './my-plan-routing.module';
import { MyPlanComponent } from './my-plan/my-plan.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    MyPlanComponent
  ],
  imports: [
    CommonModule,
    MyPlanRoutingModule,CarouselModule
  ]
})
export class MyPlanModule { }
