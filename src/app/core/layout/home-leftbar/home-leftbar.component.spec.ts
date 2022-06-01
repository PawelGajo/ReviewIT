import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HomeLeftbarComponent } from './home-leftbar.component';

describe('HomeLeftbarComponent', () => {
  let component: HomeLeftbarComponent;
  let fixture: ComponentFixture<HomeLeftbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeLeftbarComponent]
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
