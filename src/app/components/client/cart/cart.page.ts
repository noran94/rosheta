import { Component } from '@angular/core';
import {Shared} from '../../sharedComponent';
import {SharedService} from '../../../services/shared.service';
import {UserService} from '../../../services/user.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage  extends Shared {
  url = 'cart';
  user;
  constructor(public sharedService: SharedService,
              private userService: UserService) {
    super(sharedService);
  }

    getTotalPrice() {
        return _.sumBy(this.list, 'price');
    }
}
