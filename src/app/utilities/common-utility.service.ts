import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonUtilityService {

  constructor(private menu: MenuController, private router: Router) { }

  openMenu() {
    this.menu.open('sideMenu');
  }

  openSearchGlobal() {
    this.router.navigate(['search-global'])
  }

}
