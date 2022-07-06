import {
  createPost,
  createPostFailure,
  createPostSuccess,
  loadAnswerForPostFailure,
  loadAnswerForPostSuccess,
  loadPosts,
  loadPostsFailure,
  loadPostsSuccess,
  searchPosts,
  searchPostsFailure,
  searchPostsSuccess,
  selectPost
} from './posts.actions';
import { createReducer, on } from '@ngrx/store';
import { Answer } from '../models/Answer';
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
  answers_for_selected_post: Answer[] | undefined;
}

const initialState: PostsState = {
  posts: [],
  selectedPost: undefined,
  answers_for_selected_post: undefined,
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
    loadAnswerForPostSuccess,
    (state, { answers }): PostsState => ({
      ...state,
      loading: false,
      answers_for_selected_post: answers
    })
  ),
  on(
    loadAnswerForPostFailure,
    (state, { error }): PostsState => ({
      ...state,
      loading: false,
      answers_for_selected_post: undefined,
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
  ),
  on(
    createPost,
    (state): PostsState => ({
      ...state,
      loading: true
    })
  ),
  on(
    createPostSuccess,
    (state, { post }): PostsState => ({
      ...state,
      selectedPost: post,
      loading: false,
      posts: [...state.posts, post]
    })
  ),
  on(
    createPostFailure,
    (state, { error }): PostsState => ({
      ...state,
      selectedPost: undefined,
      loading: false,
      error: error
    })
  )
);
