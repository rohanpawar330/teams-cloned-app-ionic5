import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },

  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'chat-room',
    loadChildren: () => import('./pages/chat-room/chat-room.module').then( m => m.ChatRoomPageModule)
  },
  {
    path: 'search-global',
    loadChildren: () => import('./pages/search-global/search-global.module').then( m => m.SearchGlobalPageModule)
  },
  {
    path: 'user-details',
    loadChildren: () => import('./pages/user-details/user-details.module').then( m => m.UserDetailsPageModule)
  },
  // {
  //   path: 'activity',
  //   loadChildren: () => import('./tabs/activity/activity.module').then( m => m.ActivityPageModule)
  // },
  // {
  //   path: 'chats',
  //   loadChildren: () => import('./tabs/chats/chats.module').then( m => m.ChatsPageModule)
  // },
  // {
  //   path: 'teams',
  //   loadChildren: () => import('./tabs/teams/teams.module').then( m => m.TeamsPageModule)
  // },
  // {
  //   path: 'calander',
  //   loadChildren: () => import('./tabs/calander/calander.module').then( m => m.CalanderPageModule)
  // },
  // {
  //   path: 'calls',
  //   loadChildren: () => import('./tabs/calls/calls.module').then( m => m.CallsPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
