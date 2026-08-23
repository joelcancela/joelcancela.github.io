import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngjc-contact-page',
  standalone: false,
  templateUrl: './contact-page.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
