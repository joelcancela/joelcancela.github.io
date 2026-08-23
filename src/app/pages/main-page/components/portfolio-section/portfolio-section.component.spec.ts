import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSectionComponent } from './portfolio-section.component';
import { TranslateModule } from '@ngx-translate/core';
import { MainPageModule } from '../../main-page.module';

describe('PortfolioSectionComponent', () => {
  let component: PortfolioSectionComponent;
  let fixture: ComponentFixture<PortfolioSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortfolioSectionComponent],
      imports: [TranslateModule.forRoot(), MainPageModule]
    })
        .compileComponents();
      });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
