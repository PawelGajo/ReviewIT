import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { HomeComponent } from './layout/home/home.component';
import { HomeLeftbarComponent } from './layout/home-leftbar/home-leftbar.component';
import { HomeLogoComponent } from './layout/home-logo/home-logo.component';
import { HomeMainContentComponent } from './layout/home-main-content/home-main-content.component';
import { HomeNavigationComponent } from './layout/home-navigation/home-navigation.component';
import { NgModule } from '@angular/core';
import { PostEffects } from './features/post/state/posts.effects';
import { PostModule } from './features/post/post.module';
import { SharedModule } from '../shared/shared.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { ThemeModule } from './features/theme/theme.module';
import { UserModule } from './features/user/user.module';
import { environment } from '../../environments/environment';
import { reducers } from './store/core.reducers';

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
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([PostEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  exports: [HomeNavigationComponent]
})
export class CoreModule {}
