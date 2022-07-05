import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserPanelComponent } from './components/user-panel/user-panel.component';

const routes: Routes = [
  {
    path: ':id/details',
    component: UserPanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
