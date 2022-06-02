import { By } from '@angular/platform-browser';
import { ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

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
