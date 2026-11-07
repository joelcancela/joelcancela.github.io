import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngjc-common-page',
  standalone: false,
  templateUrl: './common-page.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./common-page.component.scss']
})
export class CommonPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
