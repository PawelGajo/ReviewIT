import { Component } from '@angular/core';

@Component({
  selector: 'app-home-logo',
  template: `<div class="logo-wrapper">
    <a href="#">
      <h1 class="logo">
        <img
          class="logo-img"
          src="assets/logo-small.png"
          alt="text Review.IT. Star is displayed to represent a dot"
        />
      </h1>
    </a>
  </div>`,
  styles: [
    `
      .logo-wrapper {
        padding: 0 2px;
      }
      .logo-wrapper a {
        text-decoration: none;
      }
      .logo__img {
        width: 150px;
      }
      .logo {
        display: flex;
        align-items: center;
      }
    `
  ]
})
export class HomeLogoComponent {
  constructor() {}
}
