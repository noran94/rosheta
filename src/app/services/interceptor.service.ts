import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Storage} from '@ionic/storage';
import {finalize, switchMap, tap} from 'rxjs/operators';
import {LoadingController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
    loader = false;

    constructor(private storage: Storage,
                private loadingController: LoadingController) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        this.loader = true;
        if (request.url.indexOf('assets') > -1) {
            return next.handle(request);
        }
        return from(this.storage.get('token')).pipe(switchMap((token) => {
                if (token && request.url.indexOf('login') === -1) {
                    request = request.clone({headers: request.headers.set('x-auth-token', token)});
                }
                request = request.clone({url: environment.baseURL + request.url, withCredentials: false});
                return from(this.loadingController.create({message: 'Please wait...'}))
                    .pipe(
                        tap((loading) => {
                            if (request.params.get('disableLoader')) {
                                return;
                            }
                            return loading.present();
                        }),
                        switchMap((loading) => {
                            return next.handle(request).pipe(
                                finalize(() => {
                                    if (request.params.get('disableLoader')) {
                                        return;
                                    }
                                    loading.dismiss();
                                })
                            );
                        })
                    );
            })
        );
    }
}
