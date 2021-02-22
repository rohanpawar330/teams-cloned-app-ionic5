import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreComponent } from './more/more.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [MoreComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  entryComponents: [MoreComponent],
  exports: [MoreComponent]
})
export class ModalModule { }
