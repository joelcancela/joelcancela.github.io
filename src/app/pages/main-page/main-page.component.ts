import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngjc-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
