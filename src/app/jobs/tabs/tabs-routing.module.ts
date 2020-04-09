import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  },
  {
    path: 'job-detail/:id/:title/:desc/:type/:loc/:comp',
    loadChildren: () => import('./tabs-detail/tabs-detail.module').then( m => m.TabsDetailPageModule)
  },
  {
    path: ':jobsId',
    loadChildren: () => import('./tabs-detail/tabs-detail.module').then( m => m.TabsDetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
