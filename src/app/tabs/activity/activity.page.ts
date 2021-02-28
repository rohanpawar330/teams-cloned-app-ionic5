import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { CommonUtilityService } from 'src/app/utilities/common-utility.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {

  constructor(private utils: CommonUtilityService,
    public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      // header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Feed',
          // icon: 'share',
          handler: () => {
            console.log('Feed clicked');
          }
        }, {
          text: 'My Activity',
          // icon: 'share',
          handler: () => {
            console.log('My Activity clicked');
          }
        },
        //   {
        //   text: 'Delete',
        //   role: 'destructive',
        //   icon: 'trash',
        //   handler: () => {
        //     console.log('Delete clicked');
        //   }
        // },
        //  {
        //   text: 'Share',
        //   icon: 'share',
        //   handler: () => {
        //     console.log('Share clicked');
        //   }
        // }, {
        //   text: 'Play (open modal)',
        //   icon: 'caret-forward-circle',
        //   handler: () => {
        //     console.log('Play clicked');
        //   }
        // }, {
        //   text: 'Favorite',
        //   icon: 'heart',
        //   handler: () => {
        //     console.log('Favorite clicked');
        //   }
        // }, {
        //   text: 'Cancel',
        //   icon: 'close',
        //   role: 'cancel',
        //   handler: () => {
        //     console.log('Cancel clicked');
        //   }
        // }
      ]
    });
    await actionSheet.present();
  }

  _openMenu() {
    this.utils.openMenu();
  }

  _openSearchGlobal() {
    this.utils.openSearchGlobal();
  }

  _toggle(event) {
    console.log(event)
    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark')
    } else {
      document.body.setAttribute('color-theme', 'light')
    }
  }
}
