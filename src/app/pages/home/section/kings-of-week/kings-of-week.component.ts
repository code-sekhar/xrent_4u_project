import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-kings-of-week',
  templateUrl: './kings-of-week.component.html',
  styleUrls: ['./kings-of-week.component.css']
})
export class KingsOfWeekComponent {
  customOptions: OwlOptions = {
    loop:true,
    margin:0,
    autoWidth: false,
    items: 4,
    dots: true,
    navText: [ '', '' ],
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
        items: 3
      }
    },
    nav: true
  }
}
