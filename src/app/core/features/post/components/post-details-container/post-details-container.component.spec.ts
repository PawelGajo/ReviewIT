import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import { MOCK_POST_LIST_ITEMS } from '../../../../../../assets/mocks/post-list.mock';
import { Post } from '../../models/Post';
import { PostDetailsContainerComponent } from './post-details-container.component';
import { selectPost } from '../../state/posts.actions';
import { selectSelectedPost } from '../../state/posts.selector';

describe('PostDetailsContainerComponent', () => {
  let component: PostDetailsContainerComponent;
  let fixture: ComponentFixture<PostDetailsContainerComponent>;
  let store: MockStore;
  let post: Post = MOCK_POST_LIST_ITEMS[0];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: selectSelectedPost,
              value: post
            }
          ]
        })
      ],
      declarations: [PostDetailsContainerComponent]
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have post details component', () => {
    const el = fixture.debugElement.query(By.css('app-post-details'));
    expect(el).toBeTruthy();
  });

  it('should have answer list component', () => {
    const el = fixture.debugElement.query(By.css('app-answer-list'));
    expect(el).toBeTruthy();
  });

  it('should get selected post', fakeAsync(() => {
    let fetchedPost: Post | undefined;
    component.post$.subscribe({
      next: (post) => (fetchedPost = post),
      error: () => fail('Should be no error'),
      complete: () => fail('Should be no complete')
    });
    store.dispatch(selectPost({ post }));
    tick();
    expect(fetchedPost).toEqual(post);
  }));
});
