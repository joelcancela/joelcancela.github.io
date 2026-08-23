import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { TrustHtmlPipe } from '../pipes/trust-html.pipe';


@NgModule({
  declarations: [TrustHtmlPipe],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ],
  exports: [
    TranslateModule,
    RouterModule,
    TrustHtmlPipe
  ]
})
export class SharedModule {
}
