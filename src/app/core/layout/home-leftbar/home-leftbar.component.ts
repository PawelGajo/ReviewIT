import { Component } from '@angular/core';

@Component({
  selector: 'app-home-leftbar',
  template: ` <mat-nav-list>
    <a mat-list-item href="#">Link 1</a>
    <a mat-list-item href="#">Link 2</a>
    <a mat-list-item href="#">Link 3</a>
  </mat-nav-list>`,
  styles: []
})
export class HomeLeftbarComponent {
  constructor() {}
}
