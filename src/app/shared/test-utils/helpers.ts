import { By } from '@angular/platform-browser';
import { ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatInputHarness } from '@angular/material/input/testing';
import { MatSelectHarness } from '@angular/material/select/testing';

export function setFieldValue<T>(
  fixture: ComponentFixture<T>,
  testId: string,
  value: string
): void {
  setFieldElementValue(findEl(fixture, testId).nativeElement, value);
}

export function findEl<T>(
  fixture: ComponentFixture<T>,
  testId: string
): DebugElement {
  return fixture.debugElement.query(By.css(`[data-testid="${testId}"]`));
}

export function findComponent<T>(
  fixture: ComponentFixture<T>,
  compoenentName: string
): DebugElement {
  return fixture.debugElement.query(By.css(compoenentName));
}

export function click<T>(fixture: ComponentFixture<T>, testId: string): void {
  const element = findEl(fixture, testId);
  const event = makeClickEvent(element.nativeElement);
  element.triggerEventHandler('click', event);
}

export function makeClickEvent(target: EventTarget): Partial<MouseEvent> {
  return {
    preventDefault(): void {},
    stopPropagation(): void {},
    stopImmediatePropagation(): void {},
    type: 'click',
    target,
    currentTarget: target,
    bubbles: true,
    cancelable: true,
    button: 0
  };
}

export function expectText<T>(
  fixture: ComponentFixture<T>,
  testId: string,
  text: string
): void {
  const element = findEl(fixture, testId);
  expect(element).toBeTruthy();
  const actualText = element.nativeElement.textContent.trim();
  expect(actualText).toBe(text);
}

export function setFieldElementValue(
  element: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  value: string
): void {
  element.value = value;
  // Dispatch an `input` or `change` fake event
  // so Angular form bindings take notice of the change.
  const isSelect = element instanceof HTMLSelectElement;
  dispatchFakeEvent(
    element,
    isSelect ? 'change' : 'input',
    isSelect ? false : true
  );
}

export function dispatchFakeEvent(
  element: EventTarget,
  type: string,
  bubbles: boolean = false
): void {
  const event = document.createEvent('Event');
  event.initEvent(type, bubbles, false);
  element.dispatchEvent(event);
}

export async function fillInput(
  loader: HarnessLoader,
  predicate: string,
  value: string
): Promise<void> {
  const input = await loader.getHarness(
    MatInputHarness.with({ selector: `[data-testid="${predicate}"` })
  );
  expect(input).toBeTruthy();
  await input.setValue(value);
  expect(await input.getValue()).toBe(value);
}

export async function clickButton(
  loader: HarnessLoader,
  predicate: string
): Promise<void> {
  const button = await loader.getHarness(
    MatButtonHarness.with({ selector: `[data-testid="${predicate}"` })
  );
  expect(button).toBeTruthy();
  await button.click();
}

export async function selectListOption(
  loader: HarnessLoader,
  predicate: string,
  option: number
): Promise<string> {
  const select = await loader.getHarness(
    MatSelectHarness.with({ selector: `[data-testid="${predicate}"` })
  );
  await select.open();
  const options = await select.getOptions();
  expect(options.length).toBeGreaterThan(0);

  await options[option].click();
  return await select.getValueText();
}
