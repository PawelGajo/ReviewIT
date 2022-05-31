import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatSlideToggleModule, FormsModule],
  exports: [MatSlideToggleModule, FormsModule]
})
export class SharedModule {}
