import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobsPage } from './jobs.page';

const routes: Routes = [
  {
      path: 'tabs',
      component: JobsPage,
      children:[
          {
              path: 'job',
              children: [
                  {
                      path: '',
                      loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
                  },
                  {
                    path: 'job-detail',
                    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
                },
              ]
          },{
              path: 'addjob',
              children: [
                  {
                      path: '',
                      loadChildren: () => import('../jobs/add-job/add-job.module').then(m => m.AddJobPageModule)
                  },
                  // {
                  //     path: 'regis',
                  //     loadChildren: () => import('./account/registration/registration.module').then(m => m.RegistrationPageModule)
                  // },
              ]
          },
          {
              path: '',
              redirectTo: '/jobs/tabs/job',
              pathMatch: 'full'
          }
      ]
  },
  {
      path: '',
      redirectTo: '/jobs/tabs/job',
      pathMatch: 'full'
  },
  {
    path: 'add-job',
    loadChildren: () => import('./add-job/add-job.module').then( m => m.AddJobPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsPageRoutingModule {}
