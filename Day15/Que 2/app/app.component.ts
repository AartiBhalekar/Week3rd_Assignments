import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a [routerLink]="['/']" [ngClass]="'myStyle'">Home</a>
    <a [routerLink]="['/about']" [ngClass]="'myStyle'">About</a>
    <a [routerLink]="['/help']" [ngClass]="'myStyle'">Help</a>
    <a [routerLink]="['/security']" [ngClass]="'myStyle'">Security</a>
    <a [routerLink]="['/contact-us']" [ngClass]="'myStyle'">Contact us</a>
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent { }