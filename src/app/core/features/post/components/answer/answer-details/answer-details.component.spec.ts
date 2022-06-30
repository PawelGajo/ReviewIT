import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  expectText,
  findComponent,
  findEl
} from '../../../../../../shared/test-utils/helpers';
import { ANSWERS_MOCK } from '../../../../../../../assets/mocks/answer.mock';
import { Answer } from '../../../models/Answer';
import { AnswerDetailsComponent } from './answer-details.component';
import { By } from '@angular/platform-browser';

describe('AnswerDetailsComponent', () => {
  let component: AnswerDetailsComponent;
  let fixture: ComponentFixture<AnswerDetailsComponent>;
  let answer: Answer = ANSWERS_MOCK[0];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnswerDetailsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have no answer msg if answer is not defined', () => {
    component.answer = null;
    fixture.detectChanges();
    expectText(
      fixture,
      'no-answer-msg',
      'Something went wrong. Answer cannot be displayed.'
    );
  });

  it('should not have no-answer-msg if answer is provied', () => {
    component.answer = answer;
    fixture.detectChanges();
    const noAnswerEl = findEl(fixture, 'no-answer-msg');
    expect(noAnswerEl).toBeFalsy();
  });

  it('should display answer attributes', () => {
    component.answer = answer;
    fixture.detectChanges();
    const answerReviewedCategories = fixture.debugElement.queryAll(
      By.css('app-answer-reviewed-category')
    );
    const answerLastActivity = fixture.debugElement.queryAll(
      By.css('app-last-activity')
    );

    expect(answerReviewedCategories.length).toBe(
      answer.reviewed_categories.length
    );
    expect(answerLastActivity).toBeTruthy();
    const answerOverallRank = findComponent(fixture, 'app-star-component');
    expect(answerOverallRank).toBeTruthy();
    expectText(fixture, 'answer-description', answer.description.trim());
  });

  it('should display top answer element', () => {
    component.answer = answer;
    component.answer.is_top_answer = true;
    fixture.detectChanges();
    expectText(fixture, 'answer-top-answer', 'Top Review');
  });

  it('should not display top answer element', () => {
    component.answer = answer;
    component.answer.is_top_answer = false;
    fixture.detectChanges();
    const topAnswerEl = findEl(fixture, 'answer-top-answer');
    expect(topAnswerEl).toBeFalsy();
  });
});
