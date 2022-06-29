import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ANSWERS_MOCK } from '../../../../../../../assets/mocks/answer.mock';
import { AnswerReviewedCategoryComponent } from './answer-reviewed-category.component';
import { By } from '@angular/platform-browser';
import { ReviewedCategory } from '../../../models/Answer';
import { expectText } from '../../../../../../shared/test-utils/helpers';

describe('AnswerReviewedCategoryComponent', () => {
  let component: AnswerReviewedCategoryComponent;
  let fixture: ComponentFixture<AnswerReviewedCategoryComponent>;
  const category: ReviewedCategory = ANSWERS_MOCK[0].reviewed_categories[0];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnswerReviewedCategoryComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerReviewedCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display category name', () => {
    component.category = category;
    fixture.detectChanges();
    expectText(fixture, 'reviewed-category-name', category.category.name);
  });

  it('should display category rank', () => {
    component.category = category;
    fixture.detectChanges();
    expectText(fixture, 'reviewed-category-rank', '' + category.rank);
  });

  it('should have answer-reviewed-category-node components amount same as category.review_nodes lenght', () => {
    component.category = category;
    fixture.detectChanges();

    const els = fixture.debugElement.queryAll(
      By.css('app-answer-reviewed-category-node')
    );
    expect(els.length).toBe(category.review_nodes.length);
  });
});
