import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngjc-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  showCVdownloadLinks: false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
