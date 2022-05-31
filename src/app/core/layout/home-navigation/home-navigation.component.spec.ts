import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HomeNavigationComponent } from './home-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeNavigationComponent', () => {
  let component: HomeNavigationComponent;
  let fixture: ComponentFixture<HomeNavigationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomeNavigationComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('has app-home-logo component', () => {
    const logoEl = fixture.debugElement.query(By.css('app-home-logo'));
    expect(logoEl).toBeTruthy();
  });

  it('has app-home-leftbar component', () => {
    const logoEl = fixture.debugElement.query(By.css('app-home-leftbar'));
    expect(logoEl).toBeTruthy();
  });

  it('has app-home-main-content component', () => {
    const logoEl = fixture.debugElement.query(By.css('app-home-main-content'));
    expect(logoEl).toBeTruthy();
  });
});
