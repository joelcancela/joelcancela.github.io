import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../../app.component';
import { Language } from '../../../../model/enums/language.enum';

@Component({
  selector: 'ngjc-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss']
})
export class PortfolioSectionComponent implements OnInit {

  AppComponent = AppComponent;
  Language = Language;

  constructor() {
  }

  ngOnInit(): void {
  }

}
