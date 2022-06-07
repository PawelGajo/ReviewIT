import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { State } from './core.state';
import { postsReducer } from '../features/post/state/posts.reducer';

export const reducers: ActionReducerMap<State> = {
  posts: postsReducer
};

export const metaReducers: MetaReducer<State>[] = [];
