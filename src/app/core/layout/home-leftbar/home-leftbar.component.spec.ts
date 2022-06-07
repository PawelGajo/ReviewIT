import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HomeLeftbarComponent } from './home-leftbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomeLeftbarComponent', () => {
  let component: HomeLeftbarComponent;
  let fixture: ComponentFixture<HomeLeftbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeLeftbarComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLeftbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has app-user-info component', () => {
    const userInfoEl = fixture.debugElement.query(By.css('app-user-info'));
    expect(userInfoEl).toBeTruthy();
  });
});
