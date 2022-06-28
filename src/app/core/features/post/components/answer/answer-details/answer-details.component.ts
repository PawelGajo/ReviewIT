import { Component, Input } from '@angular/core';
import { Answer } from '../../../models/Answer';

@Component({
  selector: 'app-answer-details',
  templateUrl: './answer-details.component.html',
  styleUrls: ['./answer-details.component.scss']
})
export class AnswerDetailsComponent {
  @Input() answer: Answer | null;
  constructor() {}
}
