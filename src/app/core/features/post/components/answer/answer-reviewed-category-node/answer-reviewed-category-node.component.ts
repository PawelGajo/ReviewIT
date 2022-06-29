import { Component, Input } from '@angular/core';
import { ReviewCategoryNode } from '../../../models/Answer';

@Component({
  selector: 'app-answer-reviewed-category-node',
  templateUrl: './answer-reviewed-category-node.component.html',
  styleUrls: ['./answer-reviewed-category-node.component.scss']
})
export class AnswerReviewedCategoryNodeComponent {
  @Input() node: ReviewCategoryNode;
  constructor() {}
}
