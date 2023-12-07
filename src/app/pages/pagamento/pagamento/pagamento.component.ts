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
}
