import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoreInformationsRoutingModule } from './more-informations-routing.module';
import { MoreInformationsComponent } from './more-informations/more-informations.component';


@NgModule({
  declarations: [
    MoreInformationsComponent
  ],
  imports: [
    CommonModule,
    MoreInformationsRoutingModule
  ]
})
export class MoreInformationsModule { }
