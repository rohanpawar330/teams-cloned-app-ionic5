import { Component, OnInit } from '@angular/core';
import { CommonUtilityService } from 'src/app/utilities/common-utility.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  constructor(private utils: CommonUtilityService) {
  }

  ngOnInit() {
  }
  _openMenu() {
    this.utils.openMenu();
  }
  _openSearchGlobal() {
    this.utils.openSearchGlobal();
  }
}
