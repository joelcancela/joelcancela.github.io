import { Pipe, PipeTransform } from '@angular/core';
import { PortfolioTypeFilterEnum } from '../model/portfolio-type-filter.enum';
import { PortfolioProject } from '../model/portfolio-project';

@Pipe({
  name: 'portfolioFilter'
})
export class PortfolioFilterPipe implements PipeTransform {

  transform(projects: PortfolioProject[], filter: PortfolioTypeFilterEnum): PortfolioProject[] {
    if (filter === PortfolioTypeFilterEnum.ALL) {
      return projects;
    } else {
      return projects.filter(project => project.type === filter.toString());
    }
  }

}
