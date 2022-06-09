import { ActionReducerMap } from '@ngrx/store';
import { State } from './core.state';
import { postsReducer } from '../features/post/state/posts.reducer';

export const reducers: ActionReducerMap<State> = {
  posts: postsReducer
};
