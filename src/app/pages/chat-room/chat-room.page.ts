import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.page.html',
  styleUrls: ['./chat-room.page.scss'],
})
export class ChatRoomPage implements OnInit {

  @ViewChild('slides', { static: true }) slides: IonSlides;
  private segmentList: Array<string> = ["Chat", "Files", "More"]
  private slideList: Array<string> = ["Chat", "Files", "More"]
  private selectedSegment: string;
  constructor() {
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

}
