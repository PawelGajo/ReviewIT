import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  PostActions,
  loadPostsFailure,
  loadPostsSuccess,
  searchPosts,
  searchPostsFailure,
  searchPostsSuccess
} from './posts.actions';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { PostService } from '../services/post.service';
import { of } from 'rxjs';

@Injectable()
export class PostEffects {
  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.LOAD_POSTS_ACTION),
      exhaustMap(() =>
        this.postService.getAll().pipe(
          map((posts) => loadPostsSuccess({ posts })),
          catchError((error) => of(loadPostsFailure({ error })))
        )
      )
    );
  });

  searchPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(searchPosts),
      switchMap((action) =>
        this.postService.search(action.query).pipe(
          map((posts) => searchPostsSuccess({ posts })),
          catchError((error) => of(searchPostsFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private postService: PostService) {}
}
