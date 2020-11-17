import {Component, Input, OnInit} from '@angular/core';
import {UploadImageService} from '../../../services/upload-image.service';


@Component({
    selector: 'app-image-viewer',
    templateUrl: './image-viewer.component.html',
    styleUrls: ['./image-viewer.component.scss'],
})
export class ImageViewerComponent implements OnInit {
    @Input() uploadImageService: UploadImageService;

    constructor() {
    }

    ngOnInit() {
    }

}
