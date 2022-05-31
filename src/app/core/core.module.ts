import { CommonModule } from '@angular/common';
import { HomeComponent } from './layout/home/home.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ThemeModule } from './features/theme/theme.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, ThemeModule]
})
export class CoreModule {}
