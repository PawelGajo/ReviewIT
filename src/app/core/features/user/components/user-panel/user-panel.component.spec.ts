import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  expectText,
  findComponent
} from '../../../../../shared/test-utils/helpers';
import { By } from '@angular/platform-browser';
import { MOCK_POST_LIST_ITEMS } from '../../../../../../assets/mocks/post-list.mock';

import { UserPanelComponent } from './user-panel.component';

describe('UserPanelComponent', () => {
  let component: UserPanelComponent;
  let fixture: ComponentFixture<UserPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserPanelComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have activity summary header', () => {
    expectText(fixture, 'summary-header', 'Activity Summary');
  });

  it('should have user info component', () => {
    const el = findComponent(fixture, 'app-user-info');
    expect(el).toBeTruthy();
  });

  it('should have Added projects', () => {
    component.addedPosts = MOCK_POST_LIST_ITEMS;
    fixture.detectChanges();
    expectText(fixture, 'added-posts-header', 'Added projects:');
    const postEls = fixture.debugElement.queryAll(
      By.css('.added-posts app-inline-post')
    );
    expect(postEls.length).toBe(MOCK_POST_LIST_ITEMS.length);
  });

  it('should have Added reviews', () => {
    component.addedReviews = MOCK_POST_LIST_ITEMS;
    fixture.detectChanges();
    expectText(fixture, 'added-reviews-header', 'Added reviews:');
    const postEls = fixture.debugElement.queryAll(
      By.css('.added-reviews app-inline-post')
    );
    expect(postEls.length).toBe(MOCK_POST_LIST_ITEMS.length);
  });

  it('should have Added reviews marked as TOP', () => {
    component.addedTopReviews = MOCK_POST_LIST_ITEMS;
    fixture.detectChanges();
    expectText(
      fixture,
      'added-reviews-top-header',
      'Added reviews marked as TOP:'
    );
    const postEls = fixture.debugElement.queryAll(
      By.css('.added-reviews-top app-inline-post')
    );
    expect(postEls.length).toBe(MOCK_POST_LIST_ITEMS.length);
  });
});
