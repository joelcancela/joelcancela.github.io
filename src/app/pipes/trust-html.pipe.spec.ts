import { TrustHtmlPipe } from './trust-html.pipe';
import { waitForAsync } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { Injector } from '@angular/core';

describe('TrustHtmlPipe', () => {
  let injector: Injector;
  let domSanitizer: DomSanitizer;

  beforeEach(waitForAsync(() => {
    injector = Injector.create({
      providers: [
        {
          provide: DomSanitizer,
          useValue: {
            bypassSecurityTrustHtml: (val) => val
          }
        },
      ]
    });
    domSanitizer = injector.get(DomSanitizer);
  }));

  it('create an instance', () => {
    const pipe = new TrustHtmlPipe(domSanitizer);
    expect(pipe).toBeTruthy();
  });
});
