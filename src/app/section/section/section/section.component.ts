import { Component } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
ngOnInit() {

}
man_show:boolean=false;
woman_show:boolean=false;
treans_show:boolean=false
manHandler(){
  this.man_show = !this.man_show;
  this.woman_show = false;
  this.treans_show = false;
}
womanHandler(){
  this.woman_show = !this.woman_show;
  this.man_show = false;
  this.treans_show = false;
}
transHandler(){
  this.treans_show = !this.treans_show;
  this.woman_show = false;
  this.man_show = false;
}
clickCloseHandler(){
  this.treans_show = false;
  this.woman_show = false;
  this.man_show = false;
}
}
