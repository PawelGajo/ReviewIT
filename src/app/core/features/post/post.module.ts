import { CommonModule } from '@angular/common';
import { LastActivityComponent } from './components/last-activity/last-activity.component';
import { NgModule } from '@angular/core';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemAnswerComponent } from './components/post-list-item-answer/post-list-item-answer.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { PostRoutingModule } from './post-routing.module';
import { PostsContainerComponent } from './components/posts-container/posts-container.component';
import { SearchPostInputComponent } from './components/search-post-input/search-post-input.component';
import { SharedModule } from '../../../shared/shared.module';
import { TagComponent } from './components/tag/tag.component';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [
    PostListItemComponent,
    TagListComponent,
    TagComponent,
    LastActivityComponent,
    PostListItemAnswerComponent,
    PostsContainerComponent,
    PostListComponent,
    SearchPostInputComponent
  ],
  imports: [CommonModule, UserModule, SharedModule, PostRoutingModule],
  exports: []
})
export class PostModule {}
