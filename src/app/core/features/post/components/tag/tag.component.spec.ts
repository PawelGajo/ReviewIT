import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeDetectionStrategy } from '@angular/core';
import { TagComponent } from './tag.component';
import { expectText } from 'src/app/shared/test-utils/helpers';

describe('TagComponent', () => {
  let component: TagComponent;
  let fixture: ComponentFixture<TagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TagComponent]
    })
      .overrideComponent(TagComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      })
      .compileComponents();
    // bad workaround for onpush problem https://github.com/angular/angular/issues/12313
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagComponent);
    component = fixture.componentInstance;
    component.tag = {
      id: 1,
      name: 'test tag'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display input tag name', () => {
    expectText(fixture, 'post-tag', 'test tag');
  });
});
