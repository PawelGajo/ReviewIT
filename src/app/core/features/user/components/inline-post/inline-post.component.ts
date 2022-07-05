import { Component, Input } from '@angular/core';
import { Post } from '../../../post/models/Post';

@Component({
  selector: 'app-inline-post',
  templateUrl: './inline-post.component.html',
  styleUrls: ['./inline-post.component.scss']
})
export class InlinePostComponent {
  @Input() post: Post;
}
