import { Directive, ElementRef, Input, Renderer2, HostListener  } from '@angular/core';

@Directive({
    selector: '[appSelectionIndicator]',
})
export class AddSelectedClassDirective {
    @Input() selectedCollection: Set<string>;

    constructor(private renderer: Renderer2, private hostElement: ElementRef) {

    }


    @HostListener('click', ['$event.target'])
    onclick = () => {
        const _self = this;
        const val = _self.hostElement.nativeElement.value;
        if (_self.selectedCollection.has(val)) {
          _self.selectedCollection.delete(val);
        } else {
          _self.selectedCollection.add(val);
        }

        if (_self.selectedCollection && _self.selectedCollection.has(val)) {
            _self.renderer.addClass( _self.hostElement.nativeElement, 'selected');
        } else {
            _self.renderer.removeClass( _self.hostElement.nativeElement, 'selected');
        }

   }
  }

