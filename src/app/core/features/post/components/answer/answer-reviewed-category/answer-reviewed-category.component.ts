import { Component, Input } from '@angular/core';
import { ReviewedCategory } from '../../../models/Answer';

@Component({
  selector: 'app-answer-reviewed-category',
  templateUrl: './answer-reviewed-category.component.html',
  styleUrls: ['./answer-reviewed-category.component.scss']
})
export class AnswerReviewedCategoryComponent {
  @Input() category: ReviewedCategory;
  constructor() {}
}
