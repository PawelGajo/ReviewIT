import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HomeLogoComponent } from './home-logo.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomeLogoComponent', () => {
  let component: HomeLogoComponent;
  let fixture: ComponentFixture<HomeLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeLogoComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has logo img', () => {
    const imgEl = fixture.debugElement.query(By.css('.logo-img'));
    expect(imgEl).toBeTruthy();
  });
});
