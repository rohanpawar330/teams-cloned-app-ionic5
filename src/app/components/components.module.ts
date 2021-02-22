import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [UserCardComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [UserCardComponent]
})
export class ComponentsModule { }
