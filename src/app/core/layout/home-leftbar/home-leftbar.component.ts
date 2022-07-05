import { Component } from '@angular/core';

@Component({
  selector: 'app-home-leftbar',
  template: ` <app-user-info></app-user-info>
    <mat-nav-list>
      <a mat-list-item [routerLink]="['users', 1, 'details']">My profile</a>
      <a mat-list-item href="#">User Ranking</a>
      <a mat-list-item href="#">Recommended resources</a>
      <a mat-list-item href="#">Help</a>
      <a mat-list-item href="#">About Us</a>
      <mat-divider></mat-divider>
      <a mat-list-item href="#">
        <div class="logout">
          <span class="logout-label">Logout</span>
        </div>
      </a>
    </mat-nav-list>`,
  styles: [
    `
      .logout {
        display: flex;
        align-items: center;
      }
      .logout-label {
        color: var(--primary);
      }
      .logout-icon {
        color: var(--primary);
      }
    `
  ]
})
export class HomeLeftbarComponent {
  constructor() {}
}
