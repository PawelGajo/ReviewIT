import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PostListItem } from '../../models/Post';
import { Store } from '@ngrx/store';
import { selectPostsItems } from '../../state/posts.selector';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  posts$: Observable<PostListItem[]> = this.store.select(selectPostsItems);
  constructor(private store: Store) {}
}
