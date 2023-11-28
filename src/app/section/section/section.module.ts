import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionRoutingModule } from './section-routing.module';
import { SectionComponent } from './section/section.component';
import { ManComponent } from '../man/man.component';
import { WomanComponent } from '../woman/woman.component';
import { TransComponent } from '../trans/trans.component';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from 'ngx-slider-v2';


@NgModule({
  declarations: [
    SectionComponent, ManComponent,
    WomanComponent,
    TransComponent,
  ],
  imports: [
    CommonModule,
    SectionRoutingModule,FormsModule,NgxSliderModule
  ]
})
export class SectionModule { }
