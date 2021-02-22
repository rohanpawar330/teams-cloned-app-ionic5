import { Component, OnInit } from '@angular/core';
import { CommonUtilityService } from 'src/app/utilities/common-utility.service';
import { MONTHS, DAYS } from 'src/app/utilities/constants'
@Component({
  selector: 'app-calander',
  templateUrl: './calander.page.html',
  styleUrls: ['./calander.page.scss'],
})
export class CalanderPage implements OnInit {

  private month = MONTHS;
  private day = DAYS;

  constructor(private utils: CommonUtilityService) {
  }

  ngOnInit() {
    let date = new Date();
    console.log(date.getDate(), this.month[date.getMonth()], this.day[date.getDay()]);
    
  }
  _openMenu() {
    this.utils.openMenu();
  }
  _openSearchGlobal() {
    this.utils.openSearchGlobal();
  }
}
