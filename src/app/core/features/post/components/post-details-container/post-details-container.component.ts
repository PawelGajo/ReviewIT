import {
  selectAnswersForSelectedPost,
  selectSelectedPost
} from '../../state/posts.selector';
import { Answer } from '../../models/Answer';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../models/Post';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-post-details-container',
  templateUrl: './post-details-container.component.html',
  styleUrls: ['./post-details-container.component.scss']
})
export class PostDetailsContainerComponent {
  post$: Observable<Post | undefined>;
  answers$: Observable<Answer[] | undefined>;
  constructor(private store: Store) {
    this.post$ = this.store.select(selectSelectedPost);
    this.answers$ = this.store.select(selectAnswersForSelectedPost);
  }
}
