import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MOCK_POST_LIST_ITEMS } from '../../../../../../assets/mocks/post-list.mock';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Post } from '../../models/Post';
import { PostsContainerComponent } from './posts-container.component';
import { findComponent } from '../../../../../shared/test-utils/helpers';
import { selectPostsItems } from '../../state/posts.selector';

describe('PostsContainerComponent', () => {
  let component: PostsContainerComponent;
  let fixture: ComponentFixture<PostsContainerComponent>;
  let posts: Post[] = MOCK_POST_LIST_ITEMS;
  let store: MockStore;
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

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have post-list component', () => {
    const postListComponent = findComponent(fixture, 'app-post-list');
    expect(postListComponent).toBeTruthy();
  });

  it('should have search-post-input component', () => {
    const searchPostInputComponent = findComponent(
      fixture,
      'app-search-post-input'
    );
    expect(searchPostInputComponent).toBeTruthy();
  });

  it('should have post-filter-list component', () => {
    const postFilterListComponent = findComponent(
      fixture,
      'app-post-filter-list'
    );
    expect(postFilterListComponent).toBeTruthy();
  });

  it('should get posts from store on init', fakeAsync(() => {
    let fetchedPosts: Post[] | undefined;
    component.posts$.subscribe({
      next: (posts) => (fetchedPosts = posts),
      error: () => fail('Should be no error'),
      complete: () => fail('Should be no complete')
    });
    const storeDispatchSpy = spyOn(store, 'dispatch').and.callThrough();
    component.ngOnInit();
    tick();
    expect(storeDispatchSpy).toHaveBeenCalledTimes(1);
    expect(fetchedPosts).toEqual(posts);
  }));

  it('should get queried posts from store on search fn', fakeAsync(() => {
    let fetchedPosts: Post[] | undefined;
    component.posts$.subscribe({
      next: (posts) => (fetchedPosts = posts),
      error: () => fail('Should be no error'),
      complete: () => fail('Should be no complete')
    });
    const storeDispatchSpy = spyOn(store, 'dispatch').and.callThrough();
    component.searchPosts();
    tick();
    expect(storeDispatchSpy).toHaveBeenCalledTimes(1);
    expect(fetchedPosts).toEqual(posts);
  }));
});
