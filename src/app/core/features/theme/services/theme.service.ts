import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

type ThemeType = 'theme-dark' | 'theme-light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private DEFAULT_THEME: ThemeType = 'theme-light';
  renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initTheme() {
    const theme = this.getColorTheme();
    this.renderer.setAttribute(this.document.body, 'class', theme);
  }

  update(theme: ThemeType) {
    localStorage.setItem('user-theme', theme);
    this.renderer.setAttribute(this.document.body, 'class', theme);
  }

  isDarkMode(): boolean {
    return this.getColorTheme() === 'theme-dark';
  }

  private getColorTheme(): ThemeType {
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
