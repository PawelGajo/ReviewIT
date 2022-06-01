import { RouterModule, Routes } from '@angular/router';
import { HomeNavigationComponent } from './layout/home-navigation/home-navigation.component';
import { NgModule } from '@angular/core';
import { PostListComponent } from './components/post-list/post-list.component';

const routes: Routes = [
  {
    component: HomeNavigationComponent,
    path: '',
    children: [
      {
        path: 'posts',
        component: PostListComponent
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
