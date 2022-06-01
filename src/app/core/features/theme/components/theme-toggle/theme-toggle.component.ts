import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit {
  isDarkMode: boolean;

  constructor(private themeService: ThemeService) {}

  changeTheme(): void {
    const isCurrentDarkMode = this.themeService.isDarkMode();
    isCurrentDarkMode
      ? this.themeService.update('theme-light')
      : this.themeService.update('theme-dark');
    this.isDarkMode = !isCurrentDarkMode;
  }

  ngOnInit(): void {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }
}
