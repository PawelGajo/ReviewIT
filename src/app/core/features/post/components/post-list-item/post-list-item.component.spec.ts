import { ChangeDetectionStrategy, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  expectText,
  findComponent,
  findEl
} from 'src/app/shared/test-utils/helpers';
import { MOCK_POST_LIST_ITEMS } from '../../models/mock-post-list';
import { PostListItem } from '../../models/Post';
import { PostListItemComponent } from './post-list-item.component';

describe('PostListItemComponent', () => {
  let component: PostListItemComponent;
  let fixture: ComponentFixture<PostListItemComponent>;
  let posts: PostListItem[] = MOCK_POST_LIST_ITEMS;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostListItemComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .overrideComponent(PostListItemComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      })
      .compileComponents();
    // workaround for onpush problem https://github.com/angular/angular/issues/12313
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display error message if post input is not provided', () => {
    const el = findEl(fixture, 'post-no-data');
    expect(el.nativeElement.textContent).toContain(
      'Problem with access to the element.'
    );
  });

  it('should NOT display error message if post input is not provided', () => {
    component.post = posts[0];
    fixture.detectChanges();
    const el = findEl(fixture, 'post-no-data');
    expect(el).toBeFalsy();
  });

  it('should have app-tag-list component', () => {
    component.post = posts[0];
    fixture.detectChanges();
    const el = findComponent(fixture, 'app-tag-list');
    expect(el).toBeTruthy();
    expect(el.properties['tags']).toEqual(posts[0].categories);
  });

  it('should have correct project rank', () => {
    component.post = posts[0];
    fixture.detectChanges();
    expectText(fixture, 'post-rank', `Project rank: ${posts[0].rank}`);
  });

  it('should have correct post visits label', () => {
    component.post = posts[0];
    fixture.detectChanges();
    expectText(fixture, 'post-visits', `${posts[0].visits} visits`);
  });

  it('should have correct page-url', () => {
    component.post = posts[0];
    fixture.detectChanges();
    expectText(fixture, 'post-page-url', `Page URL: ${posts[0].page_url}`);
  });

  it('should have last-activity component', () => {
    component.post = posts[0];
    fixture.detectChanges();
    const el = findComponent(fixture, 'app-last-activity');
    expect(el).toBeTruthy();
    expect(el.properties['activity']).toEqual(posts[0].last_activity);
  });

  it('should have post-list-item-answer component', () => {
    component.post = posts[0];
    fixture.detectChanges();
    const el = findComponent(fixture, 'app-post-list-item-answer');
    expect(el).toBeTruthy();
    expect(el.properties['answers']).toEqual(posts[0].answers);
    expect(el.properties['top_answer']).toEqual(posts[0].has_top_answer);
  });
});
