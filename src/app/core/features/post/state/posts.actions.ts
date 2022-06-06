import { createAction, props } from '@ngrx/store';
import { PostListItem } from '../models/Post';

export const fetchPostListSuccess = createAction(
  '[Post List] Fetch Posts Success',
  props<{ posts: ReadonlyArray<PostListItem> }>()
);

export const fetchPostListFailed = createAction(
  '[Post List] Fetch Posts Failed',
  props<{ error: string }>()
);

export const loadedPostList = createAction('[Post List] Loaded Posts');
