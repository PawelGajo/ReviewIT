import { ChangeDetectionStrategy, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PostListItemAnswerComponent } from './post-list-item-answer.component';
import { expectText } from '../../../../../shared/test-utils/helpers';

describe('PostListItemAnswerComponent', () => {
  let component: PostListItemAnswerComponent;
  let fixture: ComponentFixture<PostListItemAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostListItemAnswerComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .overrideComponent(PostListItemAnswerComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListItemAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 answers text with no top answer', () => {
    component.answers = 4;
    component.top_answer = false;
    fixture.detectChanges();
    expectText(fixture, 'answers', `${4} answers`);
    const topAnswerEl = fixture.debugElement.query(By.css('.top-answer-icon'));
    expect(topAnswerEl).toBeFalsy();
  });

  it('should have top answer', () => {
    component.answers = 4;
    component.top_answer = true;
    fixture.detectChanges();
    const topAnswerEl = fixture.debugElement.query(By.css('.top-answer-icon'));
    expect(topAnswerEl).toBeTruthy();
  });
});
