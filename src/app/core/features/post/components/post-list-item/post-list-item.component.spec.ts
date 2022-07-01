import { ChangeDetectionStrategy, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import {
  click,
  expectText,
  findComponent,
  findEl
} from 'src/app/shared/test-utils/helpers';
import { loadAnswerForPost, selectPost } from '../../state/posts.actions';
import { MOCK_POST_LIST_ITEMS } from '../../../../../../assets/mocks/post-list.mock';
import { Post } from '../../models/Post';
import { PostListItemComponent } from './post-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PostListItemComponent', () => {
  let component: PostListItemComponent;
  let fixture: ComponentFixture<PostListItemComponent>;
  let post: Post = MOCK_POST_LIST_ITEMS[0];
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore()],
      imports: [RouterTestingModule],
      declarations: [PostListItemComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .overrideComponent(PostListItemComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      })
      .compileComponents();
    // workaround for onpush problem https://github.com/angular/angular/issues/12313

    store = TestBed.inject(MockStore);
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
    component.post = post;
    fixture.detectChanges();
    const el = findEl(fixture, 'post-no-data');
    expect(el).toBeFalsy();
  });

  it('should have app-tag-list component', () => {
    component.post = post;
    fixture.detectChanges();
    const el = findComponent(fixture, 'app-tag-list');
    expect(el).toBeTruthy();
    expect(el.properties['tags']).toEqual(post.categories);
  });

  it('should have correct project rank', () => {
    component.post = post;
    fixture.detectChanges();
    expectText(fixture, 'post-rank', `Project rank: ${post.rank}`);
  });

  it('should have correct post visits label', () => {
    component.post = post;
    fixture.detectChanges();
    expectText(fixture, 'post-visits', `${post.visits} visits`);
  });

  it('should have correct page-url', () => {
    component.post = post;
    fixture.detectChanges();
    expectText(fixture, 'post-page-url', `Page URL: ${post.page_url}`);
  });

  it('should have last-activity component', () => {
    component.post = post;
    fixture.detectChanges();
    const el = findComponent(fixture, 'app-last-activity');
    expect(el).toBeTruthy();
    expect(el.properties['activity']).toEqual(post.last_activity);
  });

  it('should have post-list-item-answer component', () => {
    component.post = post;
    fixture.detectChanges();
    const el = findComponent(fixture, 'app-post-list-item-answer');
    expect(el).toBeTruthy();
    expect(el.properties['answers']).toEqual(post.answers);
    expect(el.properties['top_answer']).toEqual(post.has_top_answer);
  });

  it('should dispatch new post and load answers for selected post after link click', () => {
    component.post = post;
    fixture.detectChanges();
    spyOn(component, 'openPostDetails').and.callThrough();
    spyOn(store, 'dispatch').and.callThrough();
    click(fixture, 'post-details-link');

    expect(component.openPostDetails).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledTimes(2);
    expect(store.dispatch).toHaveBeenCalledWith(
      loadAnswerForPost({ postId: post.id })
    );
    expect(store.dispatch).toHaveBeenCalledWith(selectPost({ post }));
  });
});
