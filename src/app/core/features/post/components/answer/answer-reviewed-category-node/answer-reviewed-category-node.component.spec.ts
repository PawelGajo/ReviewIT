import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnswerReviewedCategoryNodeComponent } from './answer-reviewed-category-node.component';
import {
  expectText,
  findEl
} from '../../../../../../shared/test-utils/helpers';
import { ReviewCategoryNode } from '../../../models/Answer';

describe('AnswerReviewedCategoryNodeComponent', () => {
  let component: AnswerReviewedCategoryNodeComponent;
  let fixture: ComponentFixture<AnswerReviewedCategoryNodeComponent>;
  const node: ReviewCategoryNode = { id: 1, description: 'test', type: 'pro' };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnswerReviewedCategoryNodeComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerReviewedCategoryNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display add icon if node is pro type', () => {
    component.node = { ...node, type: 'pro' };
    fixture.detectChanges();
    expectText(fixture, 'pro-node-icon', 'add');
    const conIcon = findEl(fixture, 'con-node-icon');
    expect(conIcon).toBeFalsy();
  });

  it('should display remove icon if node is con type', () => {
    component.node = { ...node, type: 'con' };
    fixture.detectChanges();
    expectText(fixture, 'con-node-icon', 'remove');
    const proIcon = findEl(fixture, 'pro-node-icon');
    expect(proIcon).toBeFalsy();
  });

  it('should display node description', () => {
    component.node = node;
    fixture.detectChanges();
    expectText(fixture, 'node-description', node.description);
  });
});
