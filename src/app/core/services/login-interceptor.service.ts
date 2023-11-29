import { HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Inject, Injectable, Injector } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginInterceptorService {

  constructor(@Inject(Injector) private readonly injector: Injector,private http:HttpClient) { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const auth=this.injector.get(AuthService);
  let updateRequest=request.clone({
    setHeaders: { Authorization: `Bearer ${auth.getToken()}` },
    withCredentials: true
  });
  return next.handle(updateRequest);
}
}
