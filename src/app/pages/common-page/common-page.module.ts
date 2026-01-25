import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonPageComponent } from './common-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CommonPageComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CommonPageModule {
}
