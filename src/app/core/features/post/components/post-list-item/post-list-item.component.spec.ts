import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  expectText,
  findComponent,
  findEl
} from 'src/app/shared/test-utils/helpers';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PostListItemComponent } from './post-list-item.component';
import { posts } from '../../models/mock-post-list';

describe('PostListItemComponent', () => {
  let component: PostListItemComponent;
  let fixture: ComponentFixture<PostListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostListItemComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display error message is post input is not provided', () => {
    const el = findEl(fixture, 'post-no-data');
    expect(el.nativeElement.textContent).toContain(
      'Problem with access to the element.'
    );
  });

  it('should have app-tag-list component', () => {
    component.post = posts[0];
    fixture.detectChanges();
    const el = findComponent(fixture, 'app-tag-list');
    expect(el).toBeTruthy();
    console.log(el.properties['tags']);
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

  it('should have correct repo-url', () => {
    component.post = posts[0];
    fixture.detectChanges();
    expectText(fixture, 'post-repo-url', `Repo URL: ${posts[0].repo_url}`);
  });
});
