import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent {
  @Input() posts: Post[] | null;
  constructor() {}
}
