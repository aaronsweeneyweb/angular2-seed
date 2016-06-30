import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})

export class AutoGrowDirective {

    constructor(private el: ElementRef, private renderer: Renderer){

    }

    //First argument: element you want to apply a style on, Second argument: name of the style, Third argument: value
    onFocus(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
    }

    onBlur(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');
    }
}
