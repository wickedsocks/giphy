import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class ApikeyInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next) {
    const reqClone = req.clone({
      params: req.params.set('api_key', ConstantsService.API_KEY)
    });
    return next.handle(reqClone).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) { console.log('Server response'); }
        },
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) { console.log('Unauthorized'); }
          }
        }
      )
    );
  }
}
