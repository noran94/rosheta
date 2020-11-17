import {Component} from '@angular/core';
import {Shared} from '../../sharedComponent';
import {SharedService} from '../../../services/shared.service';
import {MonthlyReportService} from '../../../services/monthly-report.service';
import {UserService} from '../../../services/user.service';

@Component({
    selector: 'app-monthly-reports',
    templateUrl: './monthly-reports.page.html',
    styleUrls: ['./monthly-reports.page.scss'],
})
export class MonthlyReportsPage extends Shared {
    url = 'monthly-report';
    searchInputs = [];

    constructor(public sharedService: SharedService,
                private monthlyReportService: MonthlyReportService,
                private userService: UserService) {
        super(sharedService);
    }

    customOnInit() {
        const lastMonth = new Date();
        lastMonth.setMonth(lastMonth.getMonth());
        if (this.userService.isAdmin()) {
            this.initFilter = {
                sortBy: 'month',
                sortDir: 'desc'
            };
            this.form.value.month = lastMonth.getMonth() + 1;
            this.form.value.year = lastMonth.getFullYear();
            this.searchInputs = [{
                name: 'paid',
                key: 'paid',
                type: 'select',
                options: [{id: true, nameEn: 'Yes'}, {id: false, nameEn: 'No'}]
            }, {
                name: 'month',
                key: 'month',
                type: 'datetime',
                format: 'MMMM YYYY',
                defaultValue: lastMonth.toISOString()
            }, {
                name: 'pharmacy',
                key: 'pharmacy',
                type: 'text'
            }];
        } else {
            this.searchInputs = [{
                name: 'paid',
                key: 'paid',
                type: 'select',
                options: [{id: true, nameEn: 'Yes'}, {id: false, nameEn: 'No'}]
            }, {
                name: 'month',
                key: 'month',
                type: 'datetime',
                format: 'MMMM'
            }];
            this.initFilter = {
                pageSize: 12,
                pharmacyId: this.userService.getCurrentUser().id,
                sortBy: 'month',
                sortDir: 'desc'
            };
        }
    }

    setPaid(item: any) {
        this.monthlyReportService.setPaid(item.id).subscribe(() => {
            item.paid = true;
            this.sharedService.successToast();
        });
    }

    customSearch() {
        if (this.form.value.month) {
            this.form.value.year = new Date(this.form.value.month).getFullYear();
            this.form.value.month = new Date(this.form.value.month).getMonth() + 1;
        } else if(this.userService.isAdmin()) {
            this.form.value.year = new Date().getFullYear();
            this.form.value.month = new Date().getMonth() + 1;
        }
        this.searchItem();
    }
}
