import { RouterModule, Routes } from '@angular/router';
import { HomeNavigationComponent } from './layout/home-navigation/home-navigation.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    component: HomeNavigationComponent,
    path: '',
    children: [
      {
        path: 'posts',
        loadChildren: () =>
          import('./features/post/post.module').then((m) => m.PostModule)
      },
      {
        path: '',
        redirectTo: '/posts',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
