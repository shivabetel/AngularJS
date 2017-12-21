import { Http } from "@angular/http";
import { BaseHttpService } from "../../common/base-http.service";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class ViewVoucherService extends BaseHttpService{
  constructor(http: Http)
  {
      super(http);
      this.httpMethod = "GET";
  }

  retrieveVoucher(): Observable<any>
  {
      return this.push();
  }
    
}