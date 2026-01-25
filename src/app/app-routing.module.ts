import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonPageComponent } from './pages/common-page/common-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PagesModule } from './pages/pages.module';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes: Routes = [
  {
    path: '', component: CommonPageComponent, children: [
      {path: '', component: MainPageComponent, pathMatch: 'full'},
      {path: 'contact', component: ContactPageComponent},
      {path: '**', component: ErrorPageComponent},  // Wildcard route to error page
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollOffset: [0, 70], // [x, y]
      relativeLinkResolution: 'legacy'
    }),
    PagesModule // Needed as we import components from this module for routing
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
