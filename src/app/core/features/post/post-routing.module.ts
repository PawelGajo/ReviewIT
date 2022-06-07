import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PostsContainerComponent } from './components/posts-container/posts-container.component';

const routes: Routes = [
  {
    path: '',
    component: PostsContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {}
