import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class BaseHttpService{
    private http: Http;
    protected httpMethod: string = "GET";
    private httpURL = "https://my-firebase-project-c5677.firebaseio.com/";
    protected payload: any;
    constructor(http: Http){
        this.http = http;
    }

    pull(): Observable<any>
    {
        const METHOD_GET = "GET";
        if(this.httpMethod == METHOD_GET)
        {
            //this.http.get()
            return this.http.get(this.httpURL, this.payload);
        }
    }

    push()
    {
        const METHOD_GET = "GET";
        const METHOD_POST = "POST";
        if(this.httpMethod == METHOD_GET)
        {
            //this.http.get()
            return this.http.get(this.httpURL, this.payload);
        }else if(this.httpMethod == METHOD_POST)
        {
            return this.http.post(this.httpURL, this.payload );
        }

    }
}