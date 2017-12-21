import { Injectable } from '@angular/core';
import { ViewVoucherService } from './http/view-voucher.service';
import { BaseService } from '../common/baseService.service';

@Injectable()
export class VoucherService extends BaseService{

    constructor(viewVoucherHttpService: ViewVoucherService){
         super(viewVoucherHttpService);       
    }

    retrieveVoucher()
    {
       return this.pull();
    }

}