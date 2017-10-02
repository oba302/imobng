import { Inject, Directive, ElementRef, Input, HostListener } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Directive({
  selector: '[appStick]'
})
export class StickDirective {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private el: ElementRef, 
  ) {  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    let number = this.document.body.scrollTop;
    if (number > 300) {      
      this.el.nativeElement.style.position = 'fixed';
      this.el.nativeElement.style.top = '0px';
    } else if (number < 300) {
      this.el.nativeElement.style.position = 'static';
      this.el.nativeElement.style.top = '0px';
    }
  }

}