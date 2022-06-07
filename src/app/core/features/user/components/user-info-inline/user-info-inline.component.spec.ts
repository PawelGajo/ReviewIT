import { ChangeDetectionStrategy, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expectText, findEl } from '../../../../../shared/test-utils/helpers';
import { UserInfoInlineComponent } from './user-info-inline.component';
import { user } from '../../models/mock-user';

describe('UserInfoInlineComponent', () => {
  let component: UserInfoInlineComponent;
  let fixture: ComponentFixture<UserInfoInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserInfoInlineComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .overrideComponent(UserInfoInlineComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      })
      .compileComponents();
    // workaround for onpush problem https://github.com/angular/angular/issues/12313
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have error message if user is not provided', () => {
    expectText(
      fixture,
      'user-info-no-data',
      'Problem with access to the element.'
    );
  });

  it('should not have error message if user is provided', () => {
    component.user = user;
    fixture.detectChanges();
    const el = findEl(fixture, 'user-info-no-data');
    expect(el).toBeFalsy();
  });

  it('should have username', () => {
    component.user = user;
    fixture.detectChanges();
    expectText(fixture, 'username', user.username);
  });

  it('should have reputation', () => {
    component.user = user;
    fixture.detectChanges();
    expectText(fixture, 'reputation', `(${user.reputation})`);
  });

  it('should have avatar img', () => {
    component.user = user;
    fixture.detectChanges();
    const el = findEl(fixture, 'avatar');
    expect(el.nativeElement.attributes['src'].textContent).toBe(
      user.avatar_link
    );
  });

  it;
});
