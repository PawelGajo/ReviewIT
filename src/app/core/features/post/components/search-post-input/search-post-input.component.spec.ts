import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  clickButton,
  fillInput,
  findEl
} from '../../../../../shared/test-utils/helpers';
import { HarnessLoader } from '@angular/cdk/testing';
import { SearchPostInputComponent } from './search-post-input.component';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

describe('SearchPostInputComponent', () => {
  let component: SearchPostInputComponent;
  let fixture: ComponentFixture<SearchPostInputComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchPostInputComponent],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPostInputComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search term after submit form', async () => {
    spyOn(component.newSearch, 'emit').and.callThrough();
    spyOn(component, 'search').and.callThrough();

    await fillInput(loader, 'post-search-input', 'test');
    await clickButton(loader, 'post-search-button');

    expect(component.search).toHaveBeenCalled();
    expect(component.newSearch.emit).toHaveBeenCalledOnceWith('test');
  });

  it('should show clear button when search input value is not emptu', async () => {
    await fillInput(loader, 'post-search-input', 'test');
    const clearEl = findEl(fixture, 'clear-search-input');
    expect(clearEl).toBeTruthy();
  });

  it('should emit new empty value when input is cleared', async () => {
    const clearInputSpy = spyOn(
      component,
      'clearSearchInput'
    ).and.callThrough();
    const searchSpy = spyOn(component, 'search').and.callThrough();
    const searchEmmiterSpy = spyOn(component.newSearch, 'emit');
    const query = 'test';
    await fillInput(loader, 'post-search-input', query);
    await clickButton(loader, 'clear-search-input');

    expect(clearInputSpy).toHaveBeenCalledTimes(1);
    expect(searchSpy).toHaveBeenCalledTimes(1);
    expect(searchEmmiterSpy).toHaveBeenCalledWith('');
  });
});
