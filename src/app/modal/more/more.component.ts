import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss'],
})
export class MoreComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  _dismiss() {
    this.modalController.dismiss();
  }
}
