import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Post } from '../../models/Post';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectPost } from '../../state/posts.actions';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListItemComponent {
  @Input() post: Post;
  constructor(private router: Router, private store: Store) {}

  openPostDetails() {
    this.store.dispatch(selectPost({ post: this.post }));
    this.router.navigate([`/posts/${this.post.id}`]);
  }
}
