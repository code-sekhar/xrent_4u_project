import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) { }
ngOnInit() {

}
displayHeader(): boolean {
  // Implement logic to conditionally display the header based on the current route
  let currentRoute = this.router.url;

  return currentRoute === '/home'|| currentRoute === '/perfil' ||currentRoute === '/home/perfil' ||currentRoute === '/planos' ||currentRoute === '/signup' ||currentRoute === '/signup/step1' ||currentRoute === '/signup/step2' ||currentRoute === '/signup/step3' ||currentRoute === '/pagamento'||currentRoute === '/pagamento/:id';
  // Example: Display header on all routes except '/about'forgotpassword
}
show_open:boolean=false;
hum_open(){
this.show_open = !this.show_open;
}
close_btnss(){
  this.show_open = false;
}
show_login:boolean=false;
logIn(){
this.show_login= !this.show_login;
}
closeLog(){
  this.show_login=false;
  this.receivedData = false;
  this.sucessToParent = false;
}
receivedData:boolean = false;

parentLog(data:any): void {
  this.receivedData = data;
  this.show_login=false;
  // console.log(this.receivedData)
}
sucessToParent:boolean = false;
sucess(datas:any){
this.sucessToParent = datas;
this.receivedData= false;
console.log(this.sucessToParent)
}
}
