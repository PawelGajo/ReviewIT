import { createReducer, on } from '@ngrx/store';
import { loadPosts, loadPostsFailure, loadPostsSuccess } from './posts.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { PostListItem } from '../models/Post';

export const featureName = 'posts';

export interface PostsState {
  posts: PostListItem[];
  loading: boolean;
  error: HttpErrorResponse | undefined;
}

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: undefined
};

export const postsReducer = createReducer(
  initialState,
  on(loadPosts, (state): PostsState => ({ ...state, loading: true })),
  on(
    loadPostsSuccess,
    (state, { posts }): PostsState => ({
      ...state,
      posts: posts,
      loading: false
    })
  ),
  on(
    loadPostsFailure,
    (state, { error }): PostsState => ({
      ...state,
      loading: false,
      error: error
    })
  )
);
