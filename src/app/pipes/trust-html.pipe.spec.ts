import { TrustHtmlPipe } from './trust-html.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { Injector } from '@angular/core';

describe('TrustHtmlPipe', () => {
  let injector: Injector;
  let domSanitizer: DomSanitizer;

  beforeEach(() => {
    injector = Injector.create({
      providers: [
        {
          provide: DomSanitizer,
          useValue: {
            bypassSecurityTrustHtml: (val: string) => val
          }
        },
      ]
    });
    domSanitizer = injector.get(DomSanitizer);
  });

  it('create an instance', () => {
    const pipe = new TrustHtmlPipe(domSanitizer);
    expect(pipe).toBeTruthy();
  });
});
