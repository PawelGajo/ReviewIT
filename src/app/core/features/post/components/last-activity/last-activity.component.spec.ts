import { ComponentFixture, TestBed } from '@angular/core/testing';
import { findComponent, findEl } from 'src/app/shared/test-utils/helpers';
import { ChangeDetectionStrategy } from '@angular/core';
import { LastActivityComponent } from './last-activity.component';
import { posts } from '../../models/mock-post-list';

describe('LastActivityComponent', () => {
  let component: LastActivityComponent;
  let fixture: ComponentFixture<LastActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastActivityComponent]
    })
      .overrideComponent(LastActivityComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      })
      .compileComponents();
    // workaround for onpush problem https://github.com/angular/angular/issues/12313
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display error message if activity input is not provided', () => {
    const el = findEl(fixture, 'activity-no-data');
    expect(el.nativeElement.textContent).toContain(
      'Problem with access to the element.'
    );
  });

  it('should NOT display error message if activity input is not provided', () => {
    component.activity = posts[0].last_activity;
    fixture.detectChanges();
    const el = findEl(fixture, 'activity-no-data');
    expect(el).toBeFalsy();
  });

  it('should have app-user-info-inline component', () => {
    component.activity = posts[0].last_activity;
    fixture.detectChanges();
    const el = findComponent(fixture, 'app-user-info-inline');
    expect(el).toBeTruthy();
    expect(el.properties['user']).toEqual(posts[0].last_activity.author);
  });

  it('should fail', () => {
    fail();
  });
});
