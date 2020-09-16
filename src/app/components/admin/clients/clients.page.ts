import { Component } from '@angular/core';
import {SharedService} from '../../../services/shared.service';
import {LookupsService} from '../../../services/lookups.service';
import {Shared} from '../../sharedComponent';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage extends Shared {
  url = 'user';
  governorates;
  districts;
  initFilter = {
    roleId: 3
  };

  constructor(public sharedService: SharedService, private lookupsService: LookupsService) {
    super(sharedService);
  }

  customOnInit() {
    this.lookupsService.listGovernorates().subscribe(governorates => {
      this.governorates = governorates;
    });
  }

  listDistricts() {
    this.form.form.get('districtId').reset();
    if (!this.form.form.get('governorateId').value) {
      this.districts = [];
      return;
    }
    this.lookupsService.listDistricts(this.form.form.get('governorateId').value).subscribe(districts => {
      this.districts = districts;
    });
  }
}
