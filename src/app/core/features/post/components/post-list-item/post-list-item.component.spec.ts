import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostListItemComponent } from './post-list-item.component';
import { findComponent } from 'src/app/shared/test-utils/helpers';

describe('PostListItemComponent', () => {
  let component: PostListItemComponent;
  let fixture: ComponentFixture<PostListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostListItemComponent]
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

  it('should have app-tag-list component', () => {
    const el = findComponent(fixture, 'app-tag-list');
    expect(el).toBeTruthy();
    expect(el.attributes['tags']).toBeTruthy();
  });
});
