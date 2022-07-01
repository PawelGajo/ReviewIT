import { Component, Input } from '@angular/core';
import { Answer } from '../../../models/Answer';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent {
  @Input() answers: Answer[] | null | undefined;
  constructor() {}
}
