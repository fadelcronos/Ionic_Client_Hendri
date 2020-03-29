import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsDetailPage } from './tabs-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TabsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsDetailPageRoutingModule {}
