import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  @Output() sucess: EventEmitter<any> = new EventEmitter();
  datas:boolean=false;

  sendSucessToParent(): void {
    //alert("hello")
    this.datas = true;
    this.sucess.emit(this.datas);
  }
}
