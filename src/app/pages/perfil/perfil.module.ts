import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import { BannerComponent } from './section/banner/banner.component';
import { ProfileDetailsComponent } from './section/profile-details/profile-details.component';
import { ReviewsComponent } from './section/reviews/reviews.component';
import { StaticAdsComponent } from './section/static-ads/static-ads.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PerfilComponent,
    BannerComponent,
    ProfileDetailsComponent,
    ReviewsComponent,
    StaticAdsComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,CarouselModule,FormsModule
  ]
})
export class PerfilModule { }
