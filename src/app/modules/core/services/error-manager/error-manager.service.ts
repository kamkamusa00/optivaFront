import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorManagerService {
  constructor() {}

  showError(error: HttpErrorResponse): void {
    debugger;
    alert(error.message); //TODO improve modals
  }
}
