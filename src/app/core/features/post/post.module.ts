import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
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
import { PostFilterListComponent } from './components/post-filter-list/post-filter-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostDetailsContainerComponent } from './components/post-details-container/post-details-container.component';

@NgModule({
  declarations: [
    PostListItemComponent,
    TagListComponent,
    TagComponent,
    LastActivityComponent,
    PostListItemAnswerComponent,
    PostsContainerComponent,
    PostListComponent,
    SearchPostInputComponent,
    PostFilterListComponent,
    PostDetailsComponent,
    PostDetailsContainerComponent
  ],
  imports: [
    CommonModule,
    UserModule,
    SharedModule,
    PostRoutingModule,
    HttpClientModule
  ],
  exports: []
})
export class PostModule {}
