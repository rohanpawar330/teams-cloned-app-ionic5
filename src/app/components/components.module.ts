import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';
import { IonicModule } from '@ionic/angular';
import { UserCallCardComponent } from './user-call-card/user-call-card.component';



@NgModule({
  declarations: [UserCardComponent, UserCallCardComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [UserCardComponent, UserCallCardComponent]
})
export class ComponentsModule { }
