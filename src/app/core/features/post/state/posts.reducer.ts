import { createReducer, on } from '@ngrx/store';
import {
  loadPosts,
  loadPostsFailure,
  loadPostsSuccess,
  searchPosts,
  searchPostsFailure,
  searchPostsSuccess,
  selectPost
} from './posts.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { Post } from '../models/Post';
import { PostsFilter } from '../models/Filter';

export const featureName = 'posts';

export interface PostsState {
  posts: Post[];
  loading: boolean;
  error: HttpErrorResponse | undefined;
  query: string;
  postsFilter: PostsFilter;
  selectedPost: Post | undefined;
}

const initialState: PostsState = {
  posts: [],
  selectedPost: undefined,
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
  ),
  on(
    selectPost,
    (state, { post }): PostsState => ({
      ...state,
      loading: false,
      selectedPost: post
    })
  )
);
