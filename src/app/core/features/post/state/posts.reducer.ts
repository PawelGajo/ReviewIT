import { createReducer, on } from '@ngrx/store';
import {
  loadPosts,
  loadPostsFailure,
  loadPostsSuccess,
  searchPosts,
  searchPostsFailure,
  searchPostsSuccess
} from './posts.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { PostListItem } from '../models/Post';
import { PostsFilter } from '../models/Filter';

export const featureName = 'posts';

export interface PostsState {
  posts: PostListItem[];
  loading: boolean;
  error: HttpErrorResponse | undefined;
  query: string;
  postsFilter: PostsFilter;
}

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: undefined,
  query: '',
  postsFilter: PostsFilter.LATEST
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
  ),
  on(
    searchPosts,
    (state, { query, postsFilter }): PostsState => ({
      ...state,
      loading: true,
      query,
      postsFilter
    })
  ),
  on(
    searchPostsSuccess,
    (state, { posts }): PostsState => ({
      ...state,
      posts: posts,
      loading: false
    })
  ),
  on(
    searchPostsFailure,
    (state, { error }): PostsState => ({
      ...state,
      loading: false,
      error: error
    })
  )
);
