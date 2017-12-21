import { Injectable } from "@angular/core";
import { BaseHttpService } from "./base-http.service";
import { Subject } from "rxjs/Subject";
import { ServiceErrors } from "./model/ServiceErrors.model";

@Injectable()
export class BaseService {

    httpService: BaseHttpService;
    serviceBusyEvent: Subject<string>;
    serviceErrorEvent: Subject<ServiceErrors[]>;
    private modelData;

    constructor(baseHttpService:  BaseHttpService)
    {
        this.httpService = baseHttpService;
        this.serviceBusyEvent = new Subject<string>();
        this.serviceErrorEvent = new Subject<ServiceErrors[]>();
        this.modelData = {};
    }
  
    push()
    {

    }

    pull()
    {
        this.serviceProcessingStarting();
        this.httpService.pull().subscribe(
            (response) =>{
                console.log("pull method success");
               this.modelData = response;
               console.log(response);
               this.serviceProcessingComplete();
            },
            (error) => {
                console.log("pull method error");
                this.serviceProcessingComplete();

            }   
        )
    }
    serviceProcessingStarting()
    {
        this.serviceBusyEvent.next('start');
    }
    serviceProcessingComplete()
    {
        this.serviceBusyEvent.next('stop');
    }
    getModelData()
    {
        return this.modelData;
    }
}