import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanosRoutingModule } from './planos-routing.module';
import { PlanosComponent } from './planos/planos.component';
import { BannerComponent } from './section/banner/banner.component';
import { PlanComponent } from './section/plan/plan.component';


@NgModule({
  declarations: [
    PlanosComponent,
    BannerComponent,
    PlanComponent
  ],
  imports: [
    CommonModule,
    PlanosRoutingModule
  ]
})
export class PlanosModule { }
