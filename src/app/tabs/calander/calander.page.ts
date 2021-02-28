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
  private JSON: any = [];
  private calander: any = {
    // "date": "",
    "meeting": [
      {
        "meetingTitle": "Angular Discussion",
        "time": "10:00 am to 10:30 am",
        "online": true
      },
      {
        "meetingTitle": "Status Discussion",
        "time": "10:30 am to 11:00 am",
        "online": true
      },
      {
        "meetingTitle": "ionic 3 Discussion",
        "time": "13:00 am to 13:30 am",
        "online": true
      },
      {
        "meetingTitle": "HR Discussion",
        "time": "15:00 am to 16:30 am",
        "online": true
      },


    ]
  };

  constructor(private utils: CommonUtilityService) {
  }

  ngOnInit() {
    for (let i = 0; i < 7; i++) {
      let date = new Date();
      date.setDate(date.getDate() + i)
      console.log(`${date.getDate()}-${this.month[date.getMonth()]}-${this.day[date.getDay()]}`);
      this.calander.date = `${date.getDate()}-${this.month[date.getMonth()]}-${date.getFullYear()}`
      this.JSON.push({ ...this.calander });
    }
    console.log(this.JSON)
  }
  _openMenu() {
    this.utils.openMenu();
  }
  _openSearchGlobal() {
    this.utils.openSearchGlobal();
  }
}
