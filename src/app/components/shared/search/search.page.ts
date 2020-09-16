import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

    @Input() inputs;
    @ViewChild('form', {static: true}) form: any;
    @Output() onSearch = new EventEmitter();
    isHidden = true;

    constructor() {
    }

    ngOnInit() {
    }

    clear() {
        this.form.reset();
        this.search();
    }

    search() {
        this.isHidden = true;
        this.onSearch.emit(this.form);
    }

    resetValue(controlName) {
        this.form.form.controls[controlName].reset();
    }

}
