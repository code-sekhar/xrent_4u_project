import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagamentoRoutingModule } from './pagamento-routing.module';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { PaymentSucessComponent } from './payment-sucess/payment-sucess.component';


@NgModule({
  declarations: [
    PagamentoComponent,
    PaymentSucessComponent
  ],
  imports: [
    CommonModule,
    PagamentoRoutingModule
  ]
})
export class PagamentoModule { }
