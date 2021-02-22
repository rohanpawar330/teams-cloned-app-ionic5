import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalanderPageRoutingModule } from './calander-routing.module';

import { CalanderPage } from './calander.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalanderPageRoutingModule
  ],
  declarations: [CalanderPage]
})
export class CalanderPageModule {}
