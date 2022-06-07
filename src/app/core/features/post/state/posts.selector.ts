import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.reducer';

export const selectPosts = createFeatureSelector<PostsState>('posts');

export const selectPostsItems = createSelector(
  selectPosts,
  (state: PostsState) => state.posts
);