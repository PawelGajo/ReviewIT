import { Component, Input } from '@angular/core';
import { PostCategory } from '../../models/Post';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {
  @Input() tag: PostCategory;
  constructor() {}
}
