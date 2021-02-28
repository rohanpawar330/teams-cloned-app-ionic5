import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { CommonUtilityService } from 'src/app/utilities/common-utility.service';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.page.html',
  styleUrls: ['./calls.page.scss'],
})
export class CallsPage implements OnInit {

  @ViewChild('slides', { static: true }) slides: IonSlides;
  private segmentList: Array<string> = ["History", "VoiceMail"]
  private slideList: Array<string> = ["History", "VoiceMail"]
  private selectedSegment: string;
  public items: any = [];

  constructor(private utils: CommonUtilityService) {
    this.selectedSegment = this.segmentList[0];
    this.items = [
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false }
    ];
  }

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
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

  _openMenu() {
    this.utils.openMenu();
  }
  _openSearchGlobal() {
    this.utils.openSearchGlobal();
  }
}
