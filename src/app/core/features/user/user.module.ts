import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserInfoInlineComponent } from './components/user-info-inline/user-info-inline.component';

@NgModule({
  declarations: [UserInfoComponent, UserInfoInlineComponent],
  imports: [CommonModule],
  exports: [UserInfoComponent, UserInfoInlineComponent]
})
export class UserModule {}
