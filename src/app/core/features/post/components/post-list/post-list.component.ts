import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PostListItem } from '../../models/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent {
  @Input() posts: PostListItem[] | null;
  constructor() {}
}
