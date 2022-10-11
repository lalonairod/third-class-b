import { Directive, Input, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[dynamicColor]'
})
export class DynamicColorDirective implements OnInit{

  @Input('dynamicColor') color : string = '';
  colorEnter : string = '';
  @Input ('sizeFont') sizeFont : string = '';

  @HostListener('mouseenter') mouse(){
    this.element.nativeElement.style.color = this.color;
  }

  @HostListener('mouseleave') mouseleave(){
    this.element.nativeElement.style.color = this.colorEnter;
  }

  @HostListener('click') plusFont(){
    this.element.nativeElement.style.fontSize = this.sizeFont;
  }

  constructor( private element : ElementRef) { }

  ngOnInit(): void {
    console.log(this.color);
    console.log(this.element.nativeElement);
  }

}
