import { Directive, ElementRef, Input, OnChanges, Renderer2,SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[star-rating]',
  standalone: true
})
export class StarRatingDirective implements OnChanges {
  @Input('star-rating') rating: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2, private sanitizer: DomSanitizer) {}

  ngOnChanges(): void {
    const ratingValue = this.rating || 0;
    const starCount = ratingValue ? Math.round(ratingValue * 2) / 2 : 0;
    console.log('starCount', [Math.round(ratingValue), Math.round(ratingValue * 2), Math.round(ratingValue * 2) / 2, starCount])
    let starIcons = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= starCount) {
        // full star
        starIcons += '<i class="bi bi-star-fill"></i>';
      } else if (i - starCount === 0.5) {
        // half star
        starIcons += '<i class="bi bi-star-half"></i>';
      } else {
        // empty star
        starIcons += '<i class="bi bi-star"></i>';
      }
    }
    const starTemplate = `<span class="d-flex align-items-center gap-1">${starIcons}</span>`;
    // const sanitizedStarTemplate = this.sanitizer.bypassSecurityTrustHtml(starTemplate);
    const sanitizedStarTemplate = this.sanitizer.sanitize(SecurityContext.HTML, starTemplate);
    // this.el.nativeElement.innerHTML = sanitizedStarTemplate;
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', sanitizedStarTemplate);
  }

}
