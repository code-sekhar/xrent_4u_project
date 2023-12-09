import { Component } from '@angular/core';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.css']
})
export class SelectPlanComponent {
  show_sucess:boolean=false;
  hide_form:boolean = true;
  clickEventSucess(){
    this.show_sucess = true;
    this.hide_form = false;
  }
}
