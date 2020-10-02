import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { InterceptorService } from './services/interceptor.service';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { UserService } from './services/user.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModalComponent} from './components/shared/modal/modal.component';
import {FormsModule} from '@angular/forms';
import {TooltipsModule} from 'ionic-tooltips';


export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function initApp(userService: UserService, storage: Storage) {
    return () => {
        return new Promise((resolve) => {
            storage.get('user').then(user => {
                userService.setUser(user);
                resolve();
            });
        });
    };
}

@NgModule({
    declarations: [AppComponent, ModalComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
        IonicStorageModule.forRoot(),
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        TooltipsModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })],
    providers: [
        StatusBar,
        SplashScreen,
        UserService,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
        {
            provide: APP_INITIALIZER,
            useFactory: initApp,
            multi: true,
            deps: [UserService, Storage]
        }

    ],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
