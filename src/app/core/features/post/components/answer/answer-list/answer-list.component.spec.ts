import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ANSWERS_MOCK } from '../../../../../../../assets/mocks/answer.mock';
import { Answer } from '../../../models/Answer';
import { AnswerListComponent } from './answer-list.component';
import { By } from '@angular/platform-browser';
import { expectText } from '../../../../../../shared/test-utils/helpers';

describe('AnswerListComponent', () => {
  let component: AnswerListComponent;
  let fixture: ComponentFixture<AnswerListComponent>;
  let answers: Answer[] = ANSWERS_MOCK;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnswerListComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have amount of answer details components same as answers lenght', () => {
    component.answers = answers;
    fixture.detectChanges();
    const answersEls = fixture.debugElement.queryAll(
      By.css('app-answer-details')
    );
    expect(answersEls.length).toBe(answers.length);
  });

  it('should have message about no answers if input answers is empty or null', () => {
    const noAnswerMsg = 'No one has added an answer yet.';
    component.answers = [];
    fixture.detectChanges();
    expectText(fixture, 'answers-list-header', noAnswerMsg);

    component.answers = null;
    fixture.detectChanges();
    expectText(fixture, 'answers-list-header', noAnswerMsg);
  });

  it('should display number of answers if answers lenght is greater than 0', () => {
    component.answers = answers;
    fixture.detectChanges();

    expectText(
      fixture,
      'answers-list-header',
      `${answers.length} Answer${answers.length ? 's' : ''}`
    );
  });
});
