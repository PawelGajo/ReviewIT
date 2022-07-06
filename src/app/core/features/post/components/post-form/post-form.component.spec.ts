import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  clickButton,
  fillInput,
  findEl,
  selectListOption
} from '../../../../../shared/test-utils/helpers';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PostFormComponent } from './post-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

describe('PostFormComponent', () => {
  let component: PostFormComponent;
  let fixture: ComponentFixture<PostFormComponent>;
  let loader: HarnessLoader;

  let fillForm = async () => {
    await fillInput(loader, 'post-title', 'test title value');
    await fillInput(loader, 'post-description', 'test description value');
    await fillInput(loader, 'post-website-url', 'www.google.com');
    await fillInput(loader, 'post-repository-url', 'www.github.com');
    await fillInput(loader, 'post-repository-url', 'www.github.com');
    await selectListOption(loader, 'post-categories', 0);
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatSelectModule,
        MatInputModule,
        NoopAnimationsModule
      ],
      declarations: [PostFormComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have form elements', () => {
    const title = findEl(fixture, 'post-title');
    const description = findEl(fixture, 'post-description');
    const repo = findEl(fixture, 'post-repository-url');
    const website = findEl(fixture, 'post-website-url');
    const categories = findEl(fixture, 'post-categories');

    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
    expect(repo).toBeTruthy();
    expect(website).toBeTruthy();
    expect(categories).toBeTruthy();
  });

  it('should return invalid form none of fields are provided', () => {
    expect(component.postForm.valid).toBeFalse();
  });

  it('should return valid form when all fields are provided', async () => {
    await fillForm();
    expect(component.postForm.valid).toBeTrue();
  });

  it('should not trigger submit function if form is invalid', async () => {
    spyOn(component, 'submit').and.returnValue();

    await clickButton(loader, 'post-submit-button');
    expect(component.postForm.valid).toBeFalse();
    expect(component.submit).toHaveBeenCalledTimes(0);
  });

  it('should trigger submit function if form is valid', async () => {
    spyOn(component, 'submit').and.returnValue();
    await fillForm();
    await clickButton(loader, 'post-submit-button');
    expect(component.postForm.valid).toBeTrue();
    expect(component.submit).toHaveBeenCalledTimes(1);
  });
});
