import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFilterListComponent } from './post-filter-list.component';

describe('PostFilterListComponent', () => {
  let component: PostFilterListComponent;
  let fixture: ComponentFixture<PostFilterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostFilterListComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFilterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
