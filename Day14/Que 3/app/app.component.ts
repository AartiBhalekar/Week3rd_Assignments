import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
    .app {
      display: block;
      text-align: center;
      padding: 25px;
	  background: #f5f5f5;
	  border: 5px dotted red;
    }
  `],
  template: `
    <div class="app">
      <counter [count]="initialCount" [maxValue]="maxValue" [minValue]="minValue"></counter>
    </div>
  `
})
export class AppComponent {
  initialCount: number = 10;
  maxValue: number = 20;
  minValue: number = 0;
}