// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-user-call-card',
//   templateUrl: './user-call-card.component.html',
//   styleUrls: ['./user-call-card.component.scss'],
// })
// export class UserCallCardComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {}

// }


import { Component, AfterViewInit, Input, ViewChild, ElementRef, Renderer2 } from "@angular/core";

@Component({
  selector: "app-user-call-card",
  templateUrl: "./user-call-card.component.html",
  styleUrls: ["./user-call-card.component.scss"]
})
export class UserCallCardComponent implements AfterViewInit {
  @ViewChild("expandWrapper", { read: ElementRef, static: true }) expandWrapper: ElementRef;
  @Input("expanded") expanded: boolean = false;
  @Input("expandHeight") expandHeight: string = "150px";

  constructor(public renderer: Renderer2) { }

  ngAfterViewInit() {
    this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
  }
}