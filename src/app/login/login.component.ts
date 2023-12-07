import { Component , EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() parentLog: EventEmitter<any> = new EventEmitter();
  data:boolean=false;

  sendDataToParent(): void {
    this.data = true;

    this.parentLog.emit(this.data,);
  }
}
