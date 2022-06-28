import { ChangeDetectionStrategy, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MOCK_POST_LIST_ITEMS } from '../../../../../../assets/mocks/post-list.mock';
import { Post } from '../../models/Post';
import { PostListComponent } from './post-list.component';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;
  let posts: Post[] = MOCK_POST_LIST_ITEMS;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostListComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .overrideComponent(PostListComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      })
      .compileComponents();
    // workaround for onpush problem https://github.com/angular/angular/issues/12313
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have list of posts same as posts.lenght', () => {
    component.posts = posts;
    fixture.detectChanges();
    const els = fixture.debugElement.queryAll(By.css('app-post-list-item'));
    expect(els.length).toBe(posts.length);
  });
});
