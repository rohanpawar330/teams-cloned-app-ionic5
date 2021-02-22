import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { CommonUtilityService } from 'src/app/utilities/common-utility.service';

@Component({
  selector: 'app-search-global',
  templateUrl: './search-global.page.html',
  styleUrls: ['./search-global.page.scss'],
})
export class SearchGlobalPage implements OnInit {

  @ViewChild('slides', { static: true }) slides: IonSlides;
  private segmentList: Array<string> = ["all", "people", "message", "files"]
  private slideList: Array<string> = ["all", "people", "message", "files"]
  private selectedSegment: string;
  private showSegment: boolean = false;

  constructor(private router: Router, private utils: CommonUtilityService) {
    this.selectedSegment = this.segmentList[0];
  }

  ngOnInit() {
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

  onSearchChange(event) {
    console.log(event.detail.value)
    if (event.detail.value.length > 1) {
      this.showSegment = true
    } else {
      this.showSegment = false
    }
  }
}
