import { CommonModule } from '@angular/common';
import { InlinePostComponent } from './components/inline-post/inline-post.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserInfoInlineComponent } from './components/user-info-inline/user-info-inline.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserInfoComponent,
    UserInfoInlineComponent,
    UserPanelComponent,
    InlinePostComponent
  ],
  imports: [CommonModule, UserRoutingModule, SharedModule],
  exports: [UserInfoComponent, UserInfoInlineComponent]
})
export class UserModule {}
