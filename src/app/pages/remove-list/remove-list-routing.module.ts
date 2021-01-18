import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemoveListPage } from './remove-list.page';

const routes: Routes = [
  {
    path: '',
    component: RemoveListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemoveListPageRoutingModule {}
