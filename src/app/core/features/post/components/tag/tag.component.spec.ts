import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TagComponent } from './tag.component';
import { expectText } from 'src/app/shared/test-utils/helpers';

describe('TagComponent', () => {
  let component: TagComponent;
  let fixture: ComponentFixture<TagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TagComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display input tag name', () => {
    component.tag = {
      id: 1,
      name: 'test tag'
    };
    fixture.detectChanges();
    expectText(fixture, 'post-tag', 'test-tag');
  });
});
