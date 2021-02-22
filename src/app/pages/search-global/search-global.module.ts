import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchGlobalPageRoutingModule } from './search-global-routing.module';

import { SearchGlobalPage } from './search-global.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchGlobalPageRoutingModule
  ],
  declarations: [SearchGlobalPage]
})
export class SearchGlobalPageModule {}
