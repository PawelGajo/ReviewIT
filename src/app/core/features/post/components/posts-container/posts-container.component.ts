import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PostListItem } from '../../models/Post';
import { Store } from '@ngrx/store';
import { selectPostsItems } from '../../state/posts.selector';

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.scss']
})
export class PostsContainerComponent {
  posts$: Observable<PostListItem[]> = this.store.select(selectPostsItems);

  constructor(private store: Store) {}

  search(term: string) {
    console.log(term);
  }
}
