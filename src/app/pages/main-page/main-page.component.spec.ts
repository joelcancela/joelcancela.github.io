import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import { MainPageModule } from './main-page.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MainPageModule,
        TranslateModule.forRoot(),
        RouterModule.forRoot([])
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
