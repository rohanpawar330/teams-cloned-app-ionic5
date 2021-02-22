import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchGlobalPage } from './search-global.page';

const routes: Routes = [
  {
    path: '',
    component: SearchGlobalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchGlobalPageRoutingModule {}
