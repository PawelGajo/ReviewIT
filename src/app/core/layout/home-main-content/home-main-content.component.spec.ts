import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeMainContentComponent } from './home-main-content.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomeMainContentComponent', () => {
  let component: HomeMainContentComponent;
  let fixture: ComponentFixture<HomeMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeMainContentComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
