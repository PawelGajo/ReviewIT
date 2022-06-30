import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StarComponentComponent } from './star-component.component';
import { expectText } from '../../test-utils/helpers';

describe('StarComponentComponent', () => {
  let component: StarComponentComponent;
  let fixture: ComponentFixture<StarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarComponentComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display rank number', () => {
    component.rank = 4;
    fixture.detectChanges();
    expectText(fixture, 'rank', '' + 4);
  });

  it('icon should have font size based on input value', () => {
    component.iconSize = 14; //px
    fixture.detectChanges();
    const iconEl = fixture.debugElement.query(
      By.css('[data-testid="rank-icon"]')
    );
    expect(iconEl.nativeElement.style.fontSize).toBe('14px');
  });
});
