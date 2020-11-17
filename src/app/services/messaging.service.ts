import {Injectable, NgZone} from '@angular/core';
import {Platform} from '@ionic/angular';
import {UserService} from './user.service';
import {
    Plugins,
    PushNotification,
    PushNotificationToken,
    PushNotificationActionPerformed
} from '@capacitor/core';
import {SharedService} from './shared.service';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

const {PushNotifications} = Plugins;

@Injectable({
    providedIn: 'root'
})
export class MessagingService {
    newRequestNotification = new Subject();
    statusNotification = new Subject();

    constructor(private platform: Platform,
                private userService: UserService,
                private sharedService: SharedService,
                private router: Router,
                private ngZone: NgZone) {
    }

    init() {
        PushNotifications.requestPermission().then(result => {
            console.log(result);
            if (result.granted) {
                PushNotifications.register();
            } else {
                console.error('not granted');
            }
        });

        PushNotifications.addListener('registration',
            (token: PushNotificationToken) => {
                console.log('Push registration success, token: ', token.value);
                this.saveToken(token.value);
            }
        );

        // Some issue with our setup and push will not work
        PushNotifications.addListener('registrationError',
            (error: any) => {
                console.error('Error on registration: ' + JSON.stringify(error));
            }
        );

        // Show us the notification payload if the app is open on our device
        PushNotifications.addListener('pushNotificationReceived',
            (notification: PushNotification) => {
                if (notification.data.eventId === '1') {
                    this.newRequestNotification.next();
                } else if (notification.data.eventId === '2') {
                    this.statusNotification.next();
                }
                this.sharedService.notificationToast(notification.body);
            }
        );

        // Method called when tapping on a notification
        PushNotifications.addListener('pushNotificationActionPerformed',
            (notification: PushNotificationActionPerformed) => {
                console.log('Push action performed: ' + JSON.stringify(notification));
                console.log('current url: ', this.router.url);
                if (notification.notification.data.url !== undefined) {
                    let url: string = notification.notification.data.url;
                    if (this.userService.isClient()) {
                        url = url.replace('{home}', 'client');
                    } else if (this.userService.isPharmacy()) {
                        url = url.replace('{home}', 'pharmacy');
                    } else if (this.userService.isAdmin()) {
                        url = url.replace('{home}', 'admin');
                    } else {
                        this.ngZone.run(() => {
                            this.router.navigate(['']);
                        });
                        return;
                    }
                    this.ngZone.run(() => {
                        if (this.router.url === url) {
                            this.statusNotification.next();
                            this.newRequestNotification.next();
                        } else {
                            this.router.navigate([url]);
                        }
                    });
                }
            }
        );
    }

    private saveToken(token) {
        if (!token) {
            return;
        }
        this.userService.updateDeviceToken(token).subscribe();
    }

    unsubscribe() {
        PushNotifications.removeAllListeners();
    }
}
