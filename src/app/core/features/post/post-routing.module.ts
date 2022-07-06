import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PostDetailsContainerComponent } from './components/post-details-container/post-details-container.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostsContainerComponent } from './components/posts-container/posts-container.component';

const routes: Routes = [
  {
    path: '',
    component: PostsContainerComponent
  },
  {
    path: 'new-post',
    component: PostFormComponent
  },
  {
    path: ':id',
    component: PostDetailsContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {}
