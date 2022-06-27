import { Component } from '@angular/core';
import { POST_DETAILS_MOCK } from '../../../../../../assets/mocks/post.mock';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-post-details-container',
  templateUrl: './post-details-container.component.html',
  styleUrls: ['./post-details-container.component.scss']
})
export class PostDetailsContainerComponent {
  post: Post = POST_DETAILS_MOCK;
  constructor() {}
}
