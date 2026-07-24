import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthServiceComponent } from './service.auth';
import { NotificationService } from './notification.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthServiceComponent, private notifier: NotificationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.auth.getToken();
    const request = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        const msg = err && err.message ? err.message : 'Unknown error';
        this.notifier.showError(`API Error: ${msg}`);
        return throwError(err);
      })
    );
  }
}
