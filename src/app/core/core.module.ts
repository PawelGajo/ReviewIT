import { CommonModule } from '@angular/common';
import { HomeComponent } from './layout/home/home.component';
import { HomeLeftbarComponent } from './layout/home-leftbar/home-leftbar.component';
import { HomeLogoComponent } from './layout/home-logo/home-logo.component';
import { HomeMainContentComponent } from './layout/home-main-content/home-main-content.component';
import { HomeNavigationComponent } from './layout/home-navigation/home-navigation.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ThemeModule } from './features/theme/theme.module';
import { UserInfoComponent } from './components/user-info/user-info.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeLeftbarComponent,
    HomeLogoComponent,
    HomeNavigationComponent,
    HomeMainContentComponent,
    UserInfoComponent
  ],
  imports: [CommonModule, SharedModule, ThemeModule],
  exports: [HomeNavigationComponent]
})
export class CoreModule {}
