import { Directive, HostBinding, HostListener, ElementRef } from "@angular/core";

@Directive({
  selector: '[appDrowdown]'
})

export class DropdownDirective {

  constructor(private _elementRef: ElementRef) {}

  @HostBinding('class.open') isOpen: boolean = false;

  // @HostListener('click') onMouseClick() {
  //   this.isOpen = !this.isOpen;
  // }

  @HostListener('document:click', ['$event', '$event.target'])
    public onClick(event: MouseEvent, targetElement: HTMLElement): void {
        if (!targetElement) {
            return;
        }

        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (clickedInside) {
          this.isOpen = !this.isOpen;
        } else {
          this.isOpen = false;
        }
    }

}
