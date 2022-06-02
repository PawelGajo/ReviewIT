import { Component, Input } from '@angular/core';
import { PostCategory } from '../../models/Post';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent {
  @Input() tags: PostCategory[];
  constructor() {}
}
