import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { PostsContainerComponent } from './posts-container.component';
import { posts } from '../../models/mock-post-list';
import { selectPostsItems } from '../../state/posts.selector';

describe('PostsContainerComponent', () => {
  let component: PostsContainerComponent;
  let fixture: ComponentFixture<PostsContainerComponent>;

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
      ]
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