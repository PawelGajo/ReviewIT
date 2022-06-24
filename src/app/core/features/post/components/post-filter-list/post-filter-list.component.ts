import { Component } from '@angular/core';
import { PostsFilter } from '../../models/Filter';

@Component({
  selector: 'app-post-filter-list',
  templateUrl: './post-filter-list.component.html',
  styleUrls: ['./post-filter-list.component.scss']
})
export class PostFilterListComponent {
  filters = PostsFilter;
  selectedFilter: PostsFilter;
  constructor() {}
}
