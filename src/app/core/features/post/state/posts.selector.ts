import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.reducer';

export const selectPosts = createFeatureSelector<PostsState>('posts');

export const selectPostsItems = createSelector(
  selectPosts,
  (state: PostsState) => state.posts
);

export const selectSelectedPost = createSelector(
  selectPosts,
  (state: PostsState) => state.selectedPost
);

export const selectAnswersForSelectedPost = createSelector(
  selectPosts,
  (state: PostsState) => state.answers_for_selected_post
);
