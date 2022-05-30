import { Inject, Injectable, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

type ThemeType = 'dark-mode' | 'light-mode';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private DEFAULT_THEME: ThemeType = 'light-mode';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  initTheme() {
    const theme = this.getColorTheme();
    this.renderer.setAttribute(document.body, 'class', theme);
  }

  update(theme: ThemeType) {
    localStorage.setItem('user-theme', theme);
    this.renderer.setAttribute(document.body, 'class', theme);
  }

  isDarkMode(): boolean {
    return this.getColorTheme() === 'dark-mode';
  }

  private getColorTheme(): ThemeType {
    const localStorageTheme = localStorage.getItem('user-theme');
    if (
      localStorageTheme === 'light-mode' ||
      localStorageTheme === 'dark-mode'
    ) {
      return localStorageTheme;
    }
    return this.DEFAULT_THEME;
  }
}
