import { metaReducers, reducers } from './store/core.reducers';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './layout/home/home.component';
import { HomeLeftbarComponent } from './layout/home-leftbar/home-leftbar.component';
import { HomeLogoComponent } from './layout/home-logo/home-logo.component';
import { HomeMainContentComponent } from './layout/home-main-content/home-main-content.component';
import { HomeNavigationComponent } from './layout/home-navigation/home-navigation.component';
import { NgModule } from '@angular/core';
import { PostModule } from './features/post/post.module';
import { SharedModule } from '../shared/shared.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { ThemeModule } from './features/theme/theme.module';
import { UserModule } from './features/user/user.module';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
    HomeComponent,
    HomeLeftbarComponent,
    HomeLogoComponent,
    HomeNavigationComponent,
    HomeMainContentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ThemeModule,
    CoreRoutingModule,
    PostModule,
    UserModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  exports: [HomeNavigationComponent]
})
export class CoreModule {}
