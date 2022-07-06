/* eslint-disable ngrx/avoid-dispatching-multiple-actions-sequentially */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { loadAnswerForPost, selectPost } from '../../state/posts.actions';
import { Post } from '../../models/Post';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

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
    if (!this.post.id) throw new Error('Post Id is not provided.');

    this.store.dispatch(selectPost({ post: this.post }));
    this.store.dispatch(loadAnswerForPost({ postId: this.post.id }));
    this.router.navigate([`/posts/${this.post.id}`]);
  }
}
