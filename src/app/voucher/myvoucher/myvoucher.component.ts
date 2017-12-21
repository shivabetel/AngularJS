import { Component } from '@angular/core';
import { ApplicationContainer } from '../../../common/ApplicationContainer';
import { VoucherService } from '../../services/voucher/voucher.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-myvoucher',
  templateUrl: './myvoucher.component.html',
  styleUrls: ['./myvoucher.component.css']
})
export class MyvoucherComponent extends ApplicationContainer{

  serviceBusySubscription: Subscription;

  constructor(private voucherService: VoucherService) { 
    super();
  }


  //override
  ngOnInit() {
   this.serviceBusySubscription = this.voucherService.serviceBusyEvent.subscribe(
      (value) => {
        if(value == 'start')
        {
          this.isApplicationBusy = true
        }
        else if(value == 'stop')
        {
          this.isApplicationBusy = false;
        }
      }
   );
    this.retrieveVouchers();
  }

  //override
  ngOnDestroy()
  {
    this.serviceBusySubscription.unsubscribe();

  }

  retrieveVouchers()
  {
    this.voucherService.pull();
  }

  _handleServiceBusy(value: string)
  {

      if(value == 'start')
      {
        this.isApplicationBusy = true
      }
      else if(value == 'stop')
      {
        this.isApplicationBusy = false;
      }
  }

}
