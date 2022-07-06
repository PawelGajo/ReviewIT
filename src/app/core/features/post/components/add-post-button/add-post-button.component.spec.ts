import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPostButtonComponent } from './add-post-button.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddPostButtonComponent', () => {
  let component: AddPostButtonComponent;
  let fixture: ComponentFixture<AddPostButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AddPostButtonComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
