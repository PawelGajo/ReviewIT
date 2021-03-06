import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { StarComponentComponent } from './components/star-component/star-component.component';

@NgModule({
  declarations: [StarComponentComponent],
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
    StarComponentComponent,
    MatSelectModule,
    FormsModule,
    LayoutModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class SharedModule {}
