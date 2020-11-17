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

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {Firebase} from '@ionic-native/firebase/ngx';
import {MessagingService} from './services/messaging.service';
import {HeaderPageModule} from './components/shared/header/header.module';
import {AddEditAccessoryPage} from './components/admin/accessories/add-edit-accessory/add-edit-accessory.page';
import {SharedModule} from './components/shared/shared/shared.module';
import {MakeOrderPage} from './components/client/make-order/make-order.page';
import {IonicSelectableModule} from 'ionic-selectable';

const firebaseConfig = {
    apiKey: 'AIzaSyAA6U6Z31cNug0XsiRmVjC41__W6cbJBrU',
    authDomain: 'rosheta-83e9d.firebaseapp.com',
    databaseURL: 'https://rosheta-83e9d.firebaseio.com',
    projectId: 'rosheta-83e9d',
    storageBucket: 'rosheta-83e9d.appspot.com',
    messagingSenderId: '543434787593',
    appId: '1:543434787593:web:7105d371a0939519bba1d8',
    measurementId: 'G-X0ZFKKMFCW'
};

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function initApp(messagingService: MessagingService, userService: UserService, storage: Storage) {
    return () => {
        return new Promise((resolve) => {
            storage.get('user').then(user => {
                userService.setUser(user);
                messagingService.init();
                resolve();
            });
        });
    };
}

@NgModule({
    declarations: [AppComponent, ModalComponent, AddEditAccessoryPage, MakeOrderPage],
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
        }),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule, HeaderPageModule, SharedModule, IonicSelectableModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        UserService,
        MessagingService,
        Firebase,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
        {
            provide: APP_INITIALIZER,
            useFactory: initApp,
            multi: true,
            deps: [MessagingService, UserService, Storage]
        }

    ],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
