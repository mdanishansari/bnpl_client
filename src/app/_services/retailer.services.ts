import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ConfirmRetailerDetails, RetailerDetails } from "../models/details.model";

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
        var url = this.baseUrl + "api/v1/retailer/add-details";
        return this.http.post(url, retailer)
            .pipe(map((data) => data), catchError(err => err))
    }

    getRetailerDetails(): Observable<any> {
        var url = this.baseUrl + "api/v1/retailer/info";
        return this.http.get(url)
            .pipe(map((data) => data), catchError(err => err))
    }

    updateRetailerDetails(retailer: ConfirmRetailerDetails): Observable<any> {
        var url = this.baseUrl + "api/v1/retailer/confirm-details";
        return this.http.post(url, retailer)
            .pipe(map((data) => data), catchError(err => err))
    }

    uploadDocuments(fd: FormData): Observable<any> {
        var url = this.baseUrl + "api/v1/retailer/document";
        return this.http.post(url, fd)
            .pipe(map((data) => data), catchError(err => err))
    }

    fetchDocuments(loanCode: string): Observable<any> {
        var url = this.baseUrl + "api/v1/retailer/fetch-agreement";
        return this.http.get(url)
            .pipe(map((data) => data), catchError(err => err))
    }

    initiateAgreement(mobile: string, loanCode: string): Observable<any> {
        var url = this.baseUrl + "api/v1/retailer/initiate-agreement";
        return this.http.get(url)
            .pipe(map((data) => data), catchError(err => err))
    }
}