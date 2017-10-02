import { Routes, RouterModule } from '@angular/router';
import { NgModule }              from '@angular/core';
//Layouts
import { LayoutComponent } from './layout/layout.component';
import { AccountGuard } from './account/account.guard';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'account',
    loadChildren: './account/account.module#AccountModule'
  },
  {
    path: '',
    canActivate: [ AccountGuard ],
    component: LayoutComponent,
    data: {
      title: 'Home'
    },  
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AccountGuard,
  ],
})
export class AppRoutingModule {}
