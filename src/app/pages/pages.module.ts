import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainPageModule } from './main-page/main-page.module';
import { CommonPageModule } from './common-page/common-page.module';
import { ContactPageModule } from './contact-page/contact-page.module';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [ErrorPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    CommonPageModule,
    MainPageModule,
    ContactPageModule
  ]
})
export class PagesModule {
}
