import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  expectText,
  findComponent
} from '../../../../../shared/test-utils/helpers';
import { By } from '@angular/platform-browser';
import { InlinePostComponent } from './inline-post.component';
import { MOCK_POST_LIST_ITEMS } from '../../../../../../assets/mocks/post-list.mock';
import { Post } from '../../../post/models/Post';

describe('InlinePostComponent', () => {
  let component: InlinePostComponent;
  let fixture: ComponentFixture<InlinePostComponent>;
  let post: Post = MOCK_POST_LIST_ITEMS[0];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InlinePostComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlinePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have top-answer class', () => {
    component.post = { ...post, answers: 3, has_top_answer: true };
    fixture.detectChanges();
    const answerEl = fixture.debugElement.query(By.css('.top-answer'));
    expect(answerEl).toBeTruthy();
  });

  it('should have no-answer class', () => {
    component.post = { ...post, answers: 0, has_top_answer: false };
    fixture.detectChanges();
    const answerEl = fixture.debugElement.query(By.css('.no-answer'));
    expect(answerEl).toBeTruthy();
  });

  it('should have star component', () => {
    component.post = post;
    fixture.detectChanges();
    const starEl = findComponent(fixture, 'app-star-component');
    expect(starEl).toBeTruthy();
  });

  it('should have post title', () => {
    component.post = post;
    fixture.detectChanges();
    expectText(fixture, 'post-title', post.title);
  });

  it('should have post creation date', () => {
    component.post = post;
    fixture.detectChanges();
    expectText(fixture, 'post-created', post.created);
  });
});
