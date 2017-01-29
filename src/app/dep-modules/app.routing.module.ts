import {RouterModule} from '@angular/route';
import {NgModule} from '@angular/core';

import {DashboardComponent} from '../dashboard/dashboard.component';

@NgModule ({
  imports: [
    RouterModule.forChild([
      {
        path: '/dashboard',
        component: 'DashboardComponent'
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard'
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
