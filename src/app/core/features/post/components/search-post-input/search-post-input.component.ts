import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-post-input',
  templateUrl: './search-post-input.component.html',
  styleUrls: ['./search-post-input.component.scss']
})
export class SearchPostInputComponent {
  searchTerm = new FormControl('');
  @Output() newSearch: EventEmitter<string> = new EventEmitter();
  constructor() {}

  search() {
    const searchValue = this.searchTerm.value.trim();
    this.newSearch.emit(searchValue);
  }

  clearSearchInput() {
    this.searchTerm.setValue('');
    this.search();
  }
}
