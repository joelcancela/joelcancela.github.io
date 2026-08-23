import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommonPageComponent } from './common-page.component';
import { RouterModule } from '@angular/router';

describe('CommonPageComponent', () => {
  let component: CommonPageComponent;
  let fixture: ComponentFixture<CommonPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [CommonPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
