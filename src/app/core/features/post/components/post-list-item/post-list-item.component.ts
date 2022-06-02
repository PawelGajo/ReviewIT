import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PostListItem } from '../../models/Post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListItemComponent {
  @Input() post: PostListItem;
  constructor() {}
}
