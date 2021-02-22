import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MoreComponent } from '../modal/more/more.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async _openModal() {
    const modal = await this.modalCtrl.create({
      component: MoreComponent,
      componentProps: {
        'name': 'TechAssembler',
        'type': 'Subscribe'
      },
      mode: 'ios',
      cssClass: 'my-modal-componet-css',
      swipeToClose: true,
      backdropDismiss: true
      // presentingElement: this.routerOutLet.nativeEl

    });

    modal.onWillDismiss().then((data: any) => {
      if (data.data)
        // this.fromModalData = data.data.fromModal
        console.log(data)
    });
    modal.onDidDismiss().then((data: any) => {
      if (data.data)
        // this.fromModalData = data.data.fromModal
        console.log(data)
    });
    return await modal.present();


  }

}
