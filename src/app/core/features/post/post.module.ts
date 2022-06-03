import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { TagComponent } from './components/tag/tag.component';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { LastActivityComponent } from './components/last-activity/last-activity.component';

@NgModule({
  declarations: [PostListItemComponent, TagListComponent, TagComponent, LastActivityComponent],
  imports: [CommonModule],
  exports: [PostListItemComponent]
})
export class PostModule {}
