import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioItemComponent } from './portfolio-item.component';
import { TranslateModule } from '@ngx-translate/core';
import { PortfolioProject } from '../../../../model/portfolio-project';

describe('PortfolioItemComponent', () => {
  let component: PortfolioItemComponent;
  let fixture: ComponentFixture<PortfolioItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortfolioItemComponent],
      imports: [TranslateModule.forRoot()],
      providers: []
    })
        .compileComponents();
      });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioItemComponent);
    component = fixture.componentInstance;
    component.project = {name: 'my project'} as PortfolioProject;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
