import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '@env/environment';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    const baseUrl = environment.API.baseUrl;
    const url = baseUrl + req.url;
    const apiReq = req.clone({ url });

    return next.handle(apiReq);
  }
}
