import { AnswerDetailsComponent } from './components/answer/answer-details/answer-details.component';
import { AnswerListComponent } from './components/answer/answer-list/answer-list.component';
import { AnswerReviewedCategoryComponent } from './components/answer/answer-reviewed-category/answer-reviewed-category.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LastActivityComponent } from './components/last-activity/last-activity.component';
import { NgModule } from '@angular/core';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostDetailsContainerComponent } from './components/post-details-container/post-details-container.component';
import { PostFilterListComponent } from './components/post-filter-list/post-filter-list.component';
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
    AnswerDetailsComponent,
    AnswerListComponent,
    AnswerReviewedCategoryComponent,
    LastActivityComponent,
    PostDetailsComponent,
    PostDetailsContainerComponent,
    PostFilterListComponent,
    PostListComponent,
    PostListItemAnswerComponent,
    PostListItemComponent,
    PostsContainerComponent,
    SearchPostInputComponent,
    TagComponent,
    TagListComponent
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
