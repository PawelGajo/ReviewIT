import { Component, EventEmitter, Output } from '@angular/core';
import { PostsFilter } from '../../models/Filter';

@Component({
  selector: 'app-post-filter-list',
  templateUrl: './post-filter-list.component.html',
  styleUrls: ['./post-filter-list.component.scss']
})
export class PostFilterListComponent {
  filters = PostsFilter;
  selectedFilter: PostsFilter = PostsFilter.LATEST;
  @Output() newFilter: EventEmitter<PostsFilter> = new EventEmitter();
  constructor() {}

  changeFilter(filter: PostsFilter) {
    this.newFilter.next(filter);
    this.selectedFilter = filter;
  }
}
