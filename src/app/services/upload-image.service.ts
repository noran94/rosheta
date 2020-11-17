import {Injectable} from '@angular/core';
import {ActionSheetController, Platform} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {CameraResultType, CameraSource, Plugins} from '@capacitor/core';
import {DomSanitizer} from '@angular/platform-browser';
import * as _ from 'lodash';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class UploadImageService {
    images = [];
    isOne = false;
    changed = false;

    constructor(private actionSheetController: ActionSheetController,
                private platform: Platform,
                private storage: Storage,
                private sanitizer: DomSanitizer,
                private http: HttpClient) {
    }

    async takePhoto(): Promise<void> {
        const ab = await this.getPhoto(CameraSource.Camera);
    }

    async selectPhoto(): Promise<void> {
        const ab = await this.getPhoto(CameraSource.Photos);
    }

    private async getPhoto(source: CameraSource): Promise<string | undefined> {
        this.changed = true;
        const image = await Plugins.Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.Uri,
            source
        });

        if (image.webPath) {
            if (this.isOne) {
                this.images.splice(0);
            }
            this.images.push({src: this.sanitizer.bypassSecurityTrustResourceUrl(image.webPath), webPath: image.webPath});
        }
        return image.webPath;
    }

    async upload(path, callback): Promise<void> {
        if (this.images.length === 0) {
            callback();
        }
        for (let i = 0; i < this.images.length; i++) {
            const blob = await fetch(this.images[i].webPath).then(r => r.blob());

            const formData = new FormData();
            formData.append('file', blob, `${i}.jpg`);
            formData.append('extraPath', path);
            this.http.post<boolean>(`image/upload`, formData).subscribe(() => {
                if (i === this.images.length - 1) {
                    callback();
                }
            });
        }
    }

    deleteImage(image) {
        _.remove(this.images, (i) => {
            return i === image;
        });
    }

    load(path: string, index: number) {
        this.getImg(path, index).subscribe((image) => {
            if (image && image.size > 0) {
                const reader = new FileReader();
                reader.addEventListener('load', () => {
                    this.images.push(reader.result);
                }, false);
                reader.readAsDataURL(image);
                this.load(path, ++index);
            }
        });
    }

    getImg(path: string, index: number) {
        return this.http.get('image/load?path=' + path + index + '.jpg',
            {responseType: 'blob', params: new HttpParams().set('disableLoader', 'true')});
    }
}
