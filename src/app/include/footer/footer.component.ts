import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private router: Router) { }
ngOnInit() {

}
displayfooter(): boolean {
  // Implement logic to conditionally display the header based on the current route
  let currentRoute = this.router.url;

  return currentRoute === '/home'|| currentRoute === '/perfil' ||currentRoute === '/home/perfil' ;
  // Example: Display header on all routes except '/about'
} // Example: Display header on all routes except '/about'

}
