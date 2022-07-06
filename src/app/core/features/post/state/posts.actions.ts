import { NewPost, Post } from '../models/Post';
import { createAction, props } from '@ngrx/store';
import { Answer } from '../models/Answer';
import { HttpErrorResponse } from '@angular/common/http';
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
  LOAD_ANSWERS_FOR_SELECTED_POST = '[Post List] Load Answers for selected Post',
  LOAD_ANSWERS_FOR_SELECTED_POST_SUCCESS = '[Post List] Load Answers for selected Post Success',
  LOAD_ANSWERS_FOR_SELECTED_POST_FAILURE = '[Post List] Load Answers for selected Post Failure',
  SELECT_POST = '[Post List] Select Post',
  CREATE_POST = '[New Post] Create Post',
  CREATE_POST_SUCCESS = '[New Post] Create Post Success',
  CREATE_POST_FAILURE = '[New Post] Create Post Failure'
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

export const loadAnswerForPost = createAction(
  PostActions.LOAD_ANSWERS_FOR_SELECTED_POST,
  props<{ postId: number }>()
);

export const loadAnswerForPostSuccess = createAction(
  PostActions.LOAD_ANSWERS_FOR_SELECTED_POST_SUCCESS,
  props<{ answers: Answer[] }>()
);

export const loadAnswerForPostFailure = createAction(
  PostActions.LOAD_ANSWERS_FOR_SELECTED_POST_FAILURE,
  props<{ error: HttpErrorResponse }>()
);

export const selectPost = createAction(
  PostActions.SELECT_POST,
  props<{ post: Post }>()
);

export const createPost = createAction(
  PostActions.CREATE_POST,
  props<{ post: NewPost }>()
);

export const createPostSuccess = createAction(
  PostActions.CREATE_POST_SUCCESS,
  props<{ post: Post }>()
);

export const createPostFailure = createAction(
  PostActions.CREATE_POST_FAILURE,
  props<{ error: HttpErrorResponse }>()
);
