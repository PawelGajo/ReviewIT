import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { TagComponent } from './components/tag/tag.component';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { LastActivityComponent } from './components/last-activity/last-activity.component';
import { UserModule } from '../user/user.module';
import { PostListItemAnswerComponent } from './components/post-list-item-answer/post-list-item-answer.component';

@NgModule({
  declarations: [
    PostListItemComponent,
    TagListComponent,
    TagComponent,
    LastActivityComponent,
    PostListItemAnswerComponent
  ],
  imports: [CommonModule, UserModule],
  exports: [PostListItemComponent]
})
export class PostModule {}
