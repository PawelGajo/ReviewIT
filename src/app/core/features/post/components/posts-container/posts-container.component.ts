import { Component, OnInit } from '@angular/core';
import { loadPosts, searchPosts } from '../../state/posts.actions';
import { Observable } from 'rxjs';
import { Post } from '../../models/Post';
import { PostsFilter } from '../../models/Filter';
import { Store } from '@ngrx/store';
import { selectPostsItems } from '../../state/posts.selector';

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.scss']
})
export class PostsContainerComponent implements OnInit {
  currentSearchQuery = '';
  currentPostsFilter: PostsFilter = PostsFilter.LATEST;
  posts$: Observable<Post[]>;

  constructor(private store: Store) {
    this.posts$ = this.store.select(selectPostsItems);
  }

  updateSearchQuery(term: string) {
    this.currentSearchQuery = term;
    this.searchPosts();
  }

  updatePostFilters(newPostsFilter: PostsFilter) {
    this.currentPostsFilter = newPostsFilter;
    this.searchPosts();
  }

  searchPosts() {
    this.store.dispatch(
      searchPosts({
        query: this.currentSearchQuery,
        postsFilter: this.currentPostsFilter
      })
    );
  }

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
  }
}
