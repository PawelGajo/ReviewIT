import { CommonModule } from '@angular/common';
import { HomeComponent } from './layout/home/home.component';
import { HomeHeaderComponent } from './layout/home-header/home-header.component';
import { HomeLeftbarComponent } from './layout/home-leftbar/home-leftbar.component';
import { HomeLogoComponent } from './layout/home-logo/home-logo.component';
import { HomeNavigationComponent } from './layout/home-navigation/home-navigation.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ThemeModule } from './features/theme/theme.module';

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeLeftbarComponent,
    HomeLogoComponent,
    HomeNavigationComponent
  ],
  imports: [CommonModule, SharedModule, ThemeModule],
  exports: [HomeNavigationComponent]
})
export class CoreModule {}
