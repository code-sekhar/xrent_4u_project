import { Component } from '@angular/core';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent {
mobile_side_ber_show:boolean=false;
mobile_portal_sideber(){
  this.mobile_side_ber_show = !this.mobile_side_ber_show;
}
close_porta_side_ber(){
  this.mobile_side_ber_show = false;
}
}
