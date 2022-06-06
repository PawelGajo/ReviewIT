import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PostListComponent } from './post-list.component';
import { posts } from '../../models/mock-post-list';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostListComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
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
    component.posts = [...posts, ...posts];
    fixture.detectChanges();
    const els = fixture.debugElement.queryAll(By.css('app-post-list-item'));
    expect(els.length).toBe(posts.length * 2);
  });
});
