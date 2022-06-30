import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  expectText,
  findComponent
} from '../../../../../shared/test-utils/helpers';
import { POST_DETAILS_MOCK } from '../../../../../../assets/mocks/post.mock';
import { Post } from '../../models/Post';
import { PostDetailsComponent } from './post-details.component';

describe('PostDetailsComponent', () => {
  let component: PostDetailsComponent;
  let fixture: ComponentFixture<PostDetailsComponent>;
  const post: Post = POST_DETAILS_MOCK;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostDetailsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display post attributes ', () => {
    component.post = post;
    fixture.detectChanges();

    expectText(fixture, 'post-title', post.title);
    expectText(fixture, 'post-description', post.description);
    expectText(fixture, 'post-created-date', `Asked: ${post.created}`);
    expectText(fixture, 'post-page-url', `Page URL: ${post.page_url}`);
    expectText(fixture, 'post-repo-url', `Repo URL: ${post.repo_url}`);
    expectText(fixture, 'post-visits', `${post.visits} visits`);

    const postRank = findComponent(fixture, 'app-star-component');
    expect(postRank).toBeTruthy();

    const tags = findComponent(fixture, 'app-tag-list');
    expect(tags).toBeTruthy();

    const lastActivity = findComponent(fixture, 'app-last-activity');
    expect(lastActivity).toBeTruthy();
  });
});
