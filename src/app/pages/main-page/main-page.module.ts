import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SharedModule } from '../../shared/shared.module';
import { PortfolioSectionComponent } from './components/portfolio-section/portfolio-section.component';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';
import { PortfolioFilterPipe } from '../../pipes/portfolio-filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    MainPageComponent,
    ProfileComponent,
    PortfolioComponent,
    PortfolioSectionComponent,
    PortfolioItemComponent,
    PortfolioFilterPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  exports: [
    ProfileComponent,
    PortfolioComponent,
    PortfolioSectionComponent,
  ]
})
export class MainPageModule {
}
