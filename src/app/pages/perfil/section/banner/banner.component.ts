import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
ngOnInit() {

}
customOptions: OwlOptions = {
  loop:true,
  margin:0,
  autoWidth: false,
  items: 4,
  dots: false,
  navText: [ '<span class="left_ars"><img src="../../../../../assets/img/left.png" class="left_icon"></span>', '<span class="right_ars"><img src="../../../../../assets/img/right.png" class="right_icon"></span>' ],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    740: {
      items: 2
    },
    940: {
      items: 4
    }
  },
  nav: true
}
// }
//   customOptions: OwlOptions = {
//     loop: true,
//     mouseDrag: false,
//     touchDrag: false,
//     pullDrag: false,
//     dots: false,
//     navSpeed: 700,
//     navText: ['', ''],
//     responsive: {
//       0: {
//         items: 1
//       },
//       400: {
//         items: 2
//       },
//       740: {
//         items: 3
//       },
//       940: {
//         items: 4
//       }
//     },
//     nav: true
//   }
}
