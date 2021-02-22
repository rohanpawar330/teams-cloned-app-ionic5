import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,  private router: Router
  ) {
    this.initializeApp();
    // this.appLocalDataStorage.getData('userDetail').then(data => {
    //   console.log(data);

    // if (data && JSON.parse(window.localStorage.getItem('userDetail'))) {
    //   if (data.email) {  // this.router.navigate(['/chat-page'])

    //     this.router.navigate(['/home'])
    //   }
    //   else {
    //     this.router.navigate(['/login'])
    //   }
    // }
    // else {
    //   this.router.navigate(['/login'])
    // }
    // })
    this.router.navigate(['/home'])

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
