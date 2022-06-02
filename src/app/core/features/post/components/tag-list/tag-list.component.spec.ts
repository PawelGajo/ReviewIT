import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy } from '@angular/core';
import { TagListComponent } from './tag-list.component';
import { posts } from '../../models/mock-post-list';

describe('TagListComponent', () => {
  let component: TagListComponent;
  let fixture: ComponentFixture<TagListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TagListComponent]
    })
      .overrideComponent(TagListComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      })
      .compileComponents();
    // bad workaround for onpush problem https://github.com/angular/angular/issues/12313
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have list of tags same as tags input lenght', () => {
    const tags = posts[0].categories;
    component.tags = tags;
    fixture.detectChanges();
    const els = fixture.debugElement.queryAll(By.css('app-tag'));
    expect(els.length).toBe(tags.length);
  });

  it('should provide tag to input of app-tag', () => {
    const tags = posts[0].categories;
    component.tags = tags;
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('app-tag'));
    expect(el.properties['tag']).toEqual(tags[0]);
  });
});
