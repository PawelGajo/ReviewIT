import { RouterModule, Routes } from '@angular/router';
import { HomeNavigationComponent } from './core/layout/home-navigation/home-navigation.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    component: HomeNavigationComponent,
    path: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
