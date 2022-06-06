import { createReducer, on } from '@ngrx/store';
import { PostListItem } from '../models/Post';
import { fetchPostListSuccess } from './posts.actions';
import { posts } from '../models/mock-post-list';

export const featureName = 'posts';

export interface PostsState {
  posts: PostListItem[];
}

const initialState: PostsState = {
  posts: posts
};

export const postsReducer = createReducer(
  initialState,
  on(
    fetchPostListSuccess,
    (state, { posts }): PostsState => ({ ...state, posts: [...posts] })
  )
);
