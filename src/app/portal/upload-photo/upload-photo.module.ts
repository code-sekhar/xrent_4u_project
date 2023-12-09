import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadPhotoRoutingModule } from './upload-photo-routing.module';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    UploadPhotoComponent
  ],
  imports: [
    CommonModule,
    UploadPhotoRoutingModule,CarouselModule
  ]
})
export class UploadPhotoModule { }
