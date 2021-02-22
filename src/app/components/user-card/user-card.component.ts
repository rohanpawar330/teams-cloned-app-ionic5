import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }
  
  _moveToChatRoom() {
    this.router.navigate(['chat-room'])
  }

  _userDetail() {
    this.router.navigate(['user-details'])

  }

}
