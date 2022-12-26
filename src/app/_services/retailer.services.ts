import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { RetailerDetails } from "../models/details.model";

@Injectable({
    providedIn: 'root'
})

export class RetailerService {
    baseUrl: string = ''
    constructor(
        private http: HttpClient
    ) {
        this.baseUrl = environment.apiUrl;
    }

    createRetailerDetails(retailer: RetailerDetails): Observable<any> {
        var url = this.baseUrl + "api/v2/retailer/add-details";
        return this.http.post(url, retailer)
            .pipe(map((data) => data), catchError(err => err))
    }

  

}