import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostListItem } from '../../models/Post';
import { Store } from '@ngrx/store';
import { loadPosts } from '../../state/posts.actions';
import { selectPostsItems } from '../../state/posts.selector';

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.scss']
})
export class PostsContainerComponent implements OnInit {
  posts$: Observable<PostListItem[]>;

  constructor(private store: Store) {
    this.posts$ = this.store.select(selectPostsItems);
  }

  search(term: string) {
    console.log(term);
  }

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
  }
}
