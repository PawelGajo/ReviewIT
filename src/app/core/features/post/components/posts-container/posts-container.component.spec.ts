import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MOCK_POST_LIST_ITEMS } from '../../models/mock-post-list';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PostListItem } from '../../models/Post';
import { PostsContainerComponent } from './posts-container.component';
import { selectPostsItems } from '../../state/posts.selector';

describe('PostsContainerComponent', () => {
  let component: PostsContainerComponent;
  let fixture: ComponentFixture<PostsContainerComponent>;
  let posts: PostListItem[] = MOCK_POST_LIST_ITEMS;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostsContainerComponent],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: selectPostsItems,
              value: [...posts]
            }
          ]
        })
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
