import { Component } from '@angular/core';
import { AppRoutingModule } from './routing/app-routing.module';

@Component({
  selector: 'pm-root', 
  template: `
      <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <div>
        <ul>
          <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
          <li><a class='nav-link' [routerLink]="['/products']">Product List</a></li>
        </ul>
        </div>
      </nav>
      <div class='container'>
        <router-outlet></router-outlet>
      </div>
  `
})

export class AppComponent{
  pageTitle: string='ACME Product Management';
}
