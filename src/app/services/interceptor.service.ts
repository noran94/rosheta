import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Storage} from '@ionic/storage';
import {switchMap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

    constructor(private storage: Storage) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.indexOf('assets') > -1) {
            return next.handle(request);
        }

        return from(this.storage.get('token')).pipe(switchMap(token => {
                if (token && request.url.indexOf('login') === -1) {
                    request = request.clone({headers: request.headers.set('x-auth-token', token)});

                }
                request = request.clone({url: environment.baseURL + request.url, withCredentials: false});
                return next.handle(request);
            })
        );
    }
}
