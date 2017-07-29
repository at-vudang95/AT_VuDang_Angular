import {Directive, ElementRef, Input, OnInit, Renderer} from '@angular/core';

@Directive({
  selector: '[emptyData]'
})
export class BirthdayDirective implements OnInit{

  @Input() emptyData: string;
  constructor(
    private el: ElementRef,
    private render: Renderer
  ) {
    console.log(this.emptyData);
  }
  ngOnInit() {
    console.log(this.emptyData);
    if (!this.emptyData) {
      const birthday = this.render.createElement(this.el.nativeElement, 'span');
      birthday.style.fontStyle = 'italic';
      birthday.style.color = '#a2a1a1'
      birthday.innerHTML = 'Empty';
      const parent = this.el.nativeElement.parentNode;
      parent.appendChild(birthday);
      this.el.nativeElement.remove();
    }else {
      this.render.setElementProperty(this.el.nativeElement, 'innerHTML', this.emptyData);
    }

  }
}
