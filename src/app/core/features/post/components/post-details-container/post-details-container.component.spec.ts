import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PostDetailsContainerComponent } from './post-details-container.component';

describe('PostDetailsContainerComponent', () => {
  let component: PostDetailsContainerComponent;
  let fixture: ComponentFixture<PostDetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostDetailsContainerComponent]
    }).compileComponents();
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
});
