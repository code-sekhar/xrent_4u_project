import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent {
  customOptions: OwlOptions = {
    loop:true,
    margin:0,
    autoWidth: false,
    items: 5,
    dots: false,
    navText: [ '<span class="left_ars ll_fft"><img src="../../../../../assets/img/left.png" class="left_icon"></span>', '<span class="right_ars rr_fft"><img src="../../../../../assets/img/right.png" class="right_icon"></span>' ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  }
}
