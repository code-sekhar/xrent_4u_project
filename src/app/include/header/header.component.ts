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

  return currentRoute === '/home'|| currentRoute === '/perfil' ||currentRoute === '/home/perfil' ;
  // Example: Display header on all routes except '/about'
}
}
