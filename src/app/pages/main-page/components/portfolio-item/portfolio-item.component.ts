import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { PortfolioProject } from '../../../../model/portfolio-project';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngjc-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit, OnChanges {

  @Input() project: PortfolioProject;
  readonly HTTPS_PREFIX: string = 'https';
  readonly pathToPortfolio: string = 'assets/portfolio/';
  readonly thumbnailFile: string = '/tmb/1.png';
  imagePath = '';

  constructor(private modalService: NgbModal) {
  }

  open(content) {
    // Not animated by default https://github.com/ng-bootstrap/ng-bootstrap/issues/295
    // https://github.com/ng-bootstrap/ng-bootstrap/pull/1765
    this.modalService.open(content, { size: 'lg' });
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.project.path.startsWith(this.HTTPS_PREFIX)) { // If we provide a link let's just use it
      this.imagePath = this.project.path;
    } else {
      this.imagePath = this.pathToPortfolio + this.project.path + this.thumbnailFile;
    }
  }

}
