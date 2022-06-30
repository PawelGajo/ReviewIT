import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-component',
  templateUrl: './star-component.component.html',
  styleUrls: ['./star-component.component.scss']
})
export class StarComponentComponent {
  @Input() rank: number;
  @Input() iconSize: number;
  constructor() {}
}
