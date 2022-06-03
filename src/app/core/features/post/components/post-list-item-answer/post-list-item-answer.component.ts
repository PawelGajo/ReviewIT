import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-answer',
  templateUrl: './post-list-item-answer.component.html',
  styleUrls: ['./post-list-item-answer.component.scss']
})
export class PostListItemAnswerComponent {
  @Input() answers: number;
  @Input() top_answer: boolean;
  constructor() {}
}
