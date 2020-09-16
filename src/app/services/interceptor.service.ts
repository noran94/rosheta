import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Storage} from '@ionic/storage';
import {switchMap} from 'rxjs/operators';
import {LoadingController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

    constructor(private storage: Storage,
                private loadingController: LoadingController) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        if (request.url.indexOf('assets') > -1) {
            return next.handle(request);
        }
        // this.presentLoading();
        return from(this.storage.get('token')).pipe(switchMap(token => {
                if (token && request.url.indexOf('login') === -1) {
                    request = request.clone({headers: request.headers.set('x-auth-token', token)});

                }
                request = request.clone({url: environment.baseURL + request.url, withCredentials: false});
                return next.handle(request);
                // return Observable.create((observer) => {
                //     const subscription = next.handle(request)
                //         .subscribe(
                //             event => {
                //                 if (event instanceof HttpResponse) {
                //                     this.loadingController.dismiss();
                //                     observer.next(event);
                //                 }
                //             },
                //             err => {
                //                 this.loadingController.dismiss();
                //                 observer.error(err);
                //             });
                //     return () => {
                //         subscription.unsubscribe();
                //     };
                // });
            })
        );
    }


    async presentLoading() {
        const loading = await this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Please wait...'
        });
        await loading.present();

        const {role, data} = await loading.onDidDismiss();
    }
}
