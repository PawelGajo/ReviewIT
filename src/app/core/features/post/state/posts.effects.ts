import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  PostActions,
  createPost,
  createPostFailure,
  createPostSuccess,
  loadAnswerForPost,
  loadAnswerForPostFailure,
  loadAnswerForPostSuccess,
  loadPostsFailure,
  loadPostsSuccess,
  searchPosts,
  searchPostsFailure,
  searchPostsSuccess
} from './posts.actions';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  switchMap,
  tap
} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';

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

  loadAnswersForSelectedPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadAnswerForPost),
      switchMap((action) =>
        this.postService.getAnswersForPost(action.postId).pipe(
          map((answers) => loadAnswerForPostSuccess({ answers })),
          catchError((error) => of(loadAnswerForPostFailure({ error })))
        )
      )
    );
  });

  loadAnswersAfterCreatingPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createPostSuccess),
      switchMap((action) =>
        this.postService.getAnswersForPost(action.post!.id!).pipe(
          map((answers) => loadAnswerForPostSuccess({ answers })),
          catchError((error) => of(loadAnswerForPostFailure({ error })))
        )
      )
    );
  });

  createPost = createEffect(() => {
    return this.actions$.pipe(
      ofType(createPost),
      concatMap((action) =>
        this.postService.createPost(action.post).pipe(
          map((post) => createPostSuccess({ post })),
          tap((action) => this.router.navigate([`/posts/${action.post.id}`])),
          catchError((error) => of(createPostFailure({ error })))
        )
      )
    );
  });

  constructor(
    private store: Store,
    private actions$: Actions,
    private postService: PostService,
    private router: Router
  ) {}
}
