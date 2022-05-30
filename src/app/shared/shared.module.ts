import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatSlideToggleModule],
  exports: [MatSlideToggleModule]
})
export class SharedModule {}
