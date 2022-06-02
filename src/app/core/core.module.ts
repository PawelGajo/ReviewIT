import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './layout/home/home.component';
import { HomeLeftbarComponent } from './layout/home-leftbar/home-leftbar.component';
import { HomeLogoComponent } from './layout/home-logo/home-logo.component';
import { HomeMainContentComponent } from './layout/home-main-content/home-main-content.component';
import { HomeNavigationComponent } from './layout/home-navigation/home-navigation.component';
import { NgModule } from '@angular/core';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostModule } from './features/post/post.module';
import { SharedModule } from '../shared/shared.module';
import { ThemeModule } from './features/theme/theme.module';
import { UserModule } from './features/user/user.module';

@NgModule({
  declarations: [
    HomeComponent,
    HomeLeftbarComponent,
    HomeLogoComponent,
    HomeNavigationComponent,
    HomeMainContentComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ThemeModule,
    CoreRoutingModule,
    PostModule,
    UserModule
  ],
  exports: [HomeNavigationComponent]
})
export class CoreModule {}
