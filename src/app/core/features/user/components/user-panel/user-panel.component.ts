import { Component } from '@angular/core';
import { MOCK_POST_LIST_ITEMS } from '../../../../../../assets/mocks/post-list.mock';
import { Post } from '../../../post/models/Post';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent {
  addedPosts: Post[] = MOCK_POST_LIST_ITEMS;
  addedReviews: Post[] = MOCK_POST_LIST_ITEMS;
  addedTopReviews: Post[] = MOCK_POST_LIST_ITEMS;
}
