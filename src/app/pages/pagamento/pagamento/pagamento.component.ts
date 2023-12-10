import { Component } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent {
show_sucess:boolean=false;
hide_form:boolean = true;
clickEventSucess(){
  this.show_sucess = true;
  this.hide_form = false;
}
plan_filter_show:boolean = false;
planFilters(){
this.plan_filter_show = !this.plan_filter_show;
}
filter_poup_close(){
  this.plan_filter_show = false;
}
}
