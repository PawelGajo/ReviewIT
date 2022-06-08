import { Component, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-post-input',
  templateUrl: './search-post-input.component.html',
  styleUrls: ['./search-post-input.component.scss']
})
export class SearchPostInputComponent {
  searchTerm = new FormControl('');
  onSearch: EventEmitter<string> = new EventEmitter();
  constructor() {}

  search() {
    const searchValue = this.searchTerm.value;
    if (!searchValue) return;
    this.onSearch.emit(searchValue);
  }
}
