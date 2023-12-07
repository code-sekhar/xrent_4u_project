import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './section/banner/banner.component';
import { KingsOfWeekComponent } from './section/kings-of-week/kings-of-week.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    KingsOfWeekComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,CarouselModule
  ]
})
export class HomeModule { }
