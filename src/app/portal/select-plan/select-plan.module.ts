import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectPlanRoutingModule } from './select-plan-routing.module';
import { SelectPlanComponent } from './select-plan/select-plan.component';
import { PlanSucessMsgComponent } from './plan-sucess-msg/plan-sucess-msg.component';


@NgModule({
  declarations: [
    SelectPlanComponent,
    PlanSucessMsgComponent
  ],
  imports: [
    CommonModule,
    SelectPlanRoutingModule
  ]
})
export class SelectPlanModule { }
