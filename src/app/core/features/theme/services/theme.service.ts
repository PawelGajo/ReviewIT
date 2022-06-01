import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

type ThemeType = 'theme-dark' | 'theme-light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private DEFAULT_THEME: ThemeType = 'theme-light';
  currentTheme: ThemeType;
  renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initTheme() {
    this.currentTheme = this.getColorTheme();
    this.renderer.setAttribute(this.document.body, 'class', this.currentTheme);
  }

  update(theme: ThemeType) {
    this.currentTheme = theme;
    localStorage.setItem('user-theme', theme);
    this.renderer.setAttribute(this.document.body, 'class', theme);
  }

  isDarkMode(): boolean {
    this.currentTheme = this.getColorTheme();
    return this.currentTheme === 'theme-dark';
  }

  private getColorTheme(): ThemeType {
    if (this.currentTheme) return this.currentTheme;
    const localStorageTheme = localStorage.getItem('user-theme');
    if (
      localStorageTheme === 'theme-light' ||
      localStorageTheme === 'theme-dark'
    ) {
      return localStorageTheme;
    }
    return this.DEFAULT_THEME;
  }
}
