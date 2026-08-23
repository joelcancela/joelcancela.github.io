import { Component, OnInit } from '@angular/core';
import portfolio from '../../../../../assets/portfolio/portfolio.json';
import { PortfolioProject } from '../../../../model/portfolio-project';
import { PortfolioTypeFilterEnum } from '../../../../model/portfolio-type-filter.enum';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'ngjc-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({
              transform: 'scale(0)',
            }),
            animate('250ms ease-in-out',
              style({
                transform: 'scale(1)',
              }))
          ]
        ),
        transition(
          ':leave',
          [
            style({
              transform: 'scale(1)',
            }),
            animate('250ms ease-in-out',
              style({
                transform: 'scale(0)',
              }))
          ]
        )
      ]
    )
  ]
})
export class PortfolioComponent implements OnInit {

  projects: PortfolioProject[] = [];
  currentFilter: PortfolioTypeFilterEnum = PortfolioTypeFilterEnum.ALL;
  portfolioTypeFilterEnum = PortfolioTypeFilterEnum;

  constructor() {
    this.projects = portfolio as unknown as PortfolioProject[];
  }

  ngOnInit(): void {
  }

}
