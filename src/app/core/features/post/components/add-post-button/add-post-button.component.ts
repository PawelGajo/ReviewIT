import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post-button',
  templateUrl: './add-post-button.component.html',
  styleUrls: ['./add-post-button.component.scss']
})
export class AddPostButtonComponent {
  constructor(private router: Router) {}

  openPostForm() {
    this.router.navigate(['posts', 'new-post']);
  }
}
