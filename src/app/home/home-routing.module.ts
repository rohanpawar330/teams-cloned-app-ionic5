import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

// const routes: Routes = [
//   {
//     path: '',
//     component: HomePage
//   }
// ];

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'activity',
        loadChildren: () => import('../tabs/activity/activity.module').then(m => m.ActivityPageModule)
      },
      {
        path: 'chats',
        loadChildren: () => import('../tabs/chats/chats.module').then(m => m.ChatsPageModule)
      },
      {
        path: 'teams',
        loadChildren: () => import('../tabs/teams/teams.module').then(m => m.TeamsPageModule)
      },
      {
        path: 'calander',
        loadChildren: () => import('../tabs/calander/calander.module').then(m => m.CalanderPageModule)
      },
      {
        path: 'calls',
        loadChildren: () => import('../tabs/calls/calls.module').then(m => m.CallsPageModule)
      },
      {
        path: '',
        redirectTo: 'activity',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
