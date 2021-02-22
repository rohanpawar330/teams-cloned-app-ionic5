import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { CommonUtilityService } from 'src/app/utilities/common-utility.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {

  @ViewChild('slides', { static: true }) slides: IonSlides;
  private segmentList: Array<string> = ["Recent", "Contacts"]
  private slideList: Array<string> = ["Slide Friends", 'Slide Enimes']
  private selectedSegment: string;

  constructor(private router: Router, private utils: CommonUtilityService) {
    this.selectedSegment = this.segmentList[0];
  }

  ngOnInit() {
    let date = new Date();
    console.log(date.getDate())
  }

  segmentChanged(ev: any, index: any) {
    // console.log('Segment changed', ev, index);
  }

  _segmentSelected(item: string, index: number) {
    // console.log(item, index);
    this.slides.slideTo(index)
  }

  _ionSlideDidChange(event: any) {
    // console.log(event)
    this.slides.getActiveIndex().then(index => {
      // console.log(index)
      this.selectedSegment = this.segmentList[index];
    })
  }
  _openMenu() {
    this.utils.openMenu();
  }
  _openSearchGlobal() {
    this.utils.openSearchGlobal();
  }
}
