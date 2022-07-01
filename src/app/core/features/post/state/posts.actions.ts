import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Post } from '../models/Post';
import { PostsFilter } from '../models/Filter';

export const enum PostActions {
  LOAD_POSTS_ACTION = '[Post List] Load Posts',
  LOAD_POSTS_ACTION_SUCCESS = '[Post List] Load Posts Success',
  LOAD_POSTS_ACTION_FAILURE = '[Post List] Load Posts Failure',
  SEARCH_POSTS_ACTION = '[Post List] Search Posts',
  SEARCH_POSTS_ACTION_SUCCESS = '[Post List] Search Posts Success',
  SEARCH_POSTS_ACTION_FAILURE = '[Post List] Search Posts Failure',
  FILTER_POSTS_ACTION = '[Post List] Filter Posts',
  FILTER_POSTS_ACTION_SUCCESS = '[Post List] Filter Posts Success',
  FILTER_POSTS_ACTION_FAILURE = '[Post List] Filter Posts Failure',
  SELECT_POST = '[Post List] Select Post'
}

export const loadPosts = createAction(PostActions.LOAD_POSTS_ACTION);

export const loadPostsSuccess = createAction(
  PostActions.LOAD_POSTS_ACTION_SUCCESS,
  props<{ posts: Post[] }>()
);

export const loadPostsFailure = createAction(
  PostActions.LOAD_POSTS_ACTION_FAILURE,
  props<{ error: HttpErrorResponse }>()
);

export const searchPosts = createAction(
  PostActions.SEARCH_POSTS_ACTION,
  props<{ query: string; postsFilter: PostsFilter }>()
);

export const searchPostsSuccess = createAction(
  PostActions.SEARCH_POSTS_ACTION_SUCCESS,
  props<{ posts: Post[] }>()
);

export const searchPostsFailure = createAction(
  PostActions.SEARCH_POSTS_ACTION_FAILURE,
  props<{ error: HttpErrorResponse }>()
);

export const selectPost = createAction(
  PostActions.SELECT_POST,
  props<{ post: Post }>()
);
