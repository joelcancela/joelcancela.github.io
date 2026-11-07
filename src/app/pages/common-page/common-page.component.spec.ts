import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPageComponent } from './common-page.component';
import { RouterModule } from '@angular/router';

describe('CommonPageComponent', () => {
  let component: CommonPageComponent;
  let fixture: ComponentFixture<CommonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [CommonPageComponent]
    })
        .compileComponents();
      });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
