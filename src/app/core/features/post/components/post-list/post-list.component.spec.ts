import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PostListComponent } from './post-list.component';
import { of } from 'rxjs';
import { posts } from '../../models/mock-post-list';
import { selectPostsItems } from '../../state/posts.selector';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostListComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: selectPostsItems,
              value: [...posts]
            }
          ]
        })
      ]
    }).compileComponents();

    TestBed.inject(MockStore);
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
    component.posts$ = of(posts);
    fixture.detectChanges();
    const els = fixture.debugElement.queryAll(By.css('app-post-list-item'));
    expect(els.length).toBe(posts.length);
  });
});
