import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngjc-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  showCVdownloadLinks = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
