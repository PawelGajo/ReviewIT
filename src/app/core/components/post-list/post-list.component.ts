import { Component } from '@angular/core';
import { PostListItem } from '../../features/post/models/Post';
import { posts } from '../../features/post/models/mock-post-list';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  posts: PostListItem[] = posts;
  constructor() {}
}
