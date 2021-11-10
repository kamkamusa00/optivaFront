import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[showErrorAfterThis]'
})
export class ErrorAfterThis {
  constructor(public viewConRef: ViewContainerRef) {}
}
