import { ANSWERS_MOCK } from '../../../../../../assets/mocks/answer.mock';
import { Answer } from '../../models/Answer';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../models/Post';
import { Store } from '@ngrx/store';
import { selectSelectedPost } from '../../state/posts.selector';

@Component({
  selector: 'app-post-details-container',
  templateUrl: './post-details-container.component.html',
  styleUrls: ['./post-details-container.component.scss']
})
export class PostDetailsContainerComponent {
  post$: Observable<Post | undefined>;
  answers: Answer[] = ANSWERS_MOCK;
  constructor(private store: Store) {
    this.post$ = this.store.select(selectSelectedPost);
  }
}
