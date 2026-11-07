import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'trustHtml',
  standalone: false
})
export class TrustHtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(content: string) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

}
