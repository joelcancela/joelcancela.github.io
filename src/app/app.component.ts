import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import defaultLanguage from '../assets/i18n/fr.json';
import { Router, Scroll } from '@angular/router';
import { delay, filter } from 'rxjs/operators';
import { ViewportScroller } from '@angular/common';
import { Language } from './model/enums/language.enum';

@Component({
  selector: 'ngjc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  static language: Language = Language.fr;

  AppComponent = AppComponent;

  LanguageEnum = Language;
  today: number = Date.now();
  navbarCollapsed = true;

  constructor(private translate: TranslateService,
              private readonly router: Router,
              private viewportScroller: ViewportScroller) {
    this.translate.setTranslation('fr', defaultLanguage);
    this.translate.setDefaultLang('fr');
    // Trick for correct scrolling, see https://github.com/angular/angular/issues/24547
    this.router.events
      .pipe(
        filter((e: any): e is Scroll => e instanceof Scroll),
        delay(100),
      )
      .subscribe(e => {
        if (e.anchor) {
          viewportScroller.scrollToAnchor(e.anchor);
        } else {
          viewportScroller.scrollToPosition([0, 0]);
        }
      });
  }

  useLanguage(language: string) {
    if (AppComponent.language !== Language[language]) {
      this.translate.use(language);
      AppComponent.language = Language[language];
    }
  }
}
