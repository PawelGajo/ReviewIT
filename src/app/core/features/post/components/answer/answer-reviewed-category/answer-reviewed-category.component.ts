import { Component, Input, OnInit } from '@angular/core';
import { ReviewedCategory } from '../../../models/Answer';

@Component({
  selector: 'app-answer-reviewed-category',
  templateUrl: './answer-reviewed-category.component.html',
  styleUrls: ['./answer-reviewed-category.component.scss']
})
export class AnswerReviewedCategoryComponent implements OnInit {
  @Input() category: ReviewedCategory;
  constructor() {}

  ngOnInit(): void {}
}
