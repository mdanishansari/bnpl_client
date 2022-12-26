import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {

    private currentUserSubject: BehaviorSubject<ResponseUser>;
    public currentUser: Observable<ResponseUser>;
    baseUrl: string = "";

    constructor(
        private http: HttpClient
    ) {
        this.currentUserSubject = new BehaviorSubject<ResponseUser>(
            JSON.parse(localStorage.getItem('currentUser') || '{}')
        );
        this.currentUser = this.currentUserSubject.asObservable();
        this.baseUrl = environment.apiUrl;
    }

    public get currentUserValue(): ResponseUser {
        return this.currentUserSubject.value;
    }

    login(retailerId: number) {
        var url = this.baseUrl + "api/v2/auth/autologin";
        var body = {
            retailerId: retailerId
        }
        return this.http.post(url, body)
            .pipe(
                map((loginData: any) => {
                    if (loginData) {
                        const responseBody = loginData;
                        const retailer: ResponseUser = {
                            token: responseBody.token,
                            tokenType: responseBody.tokenType,
                            isAuth: responseBody.isAuth,
                            status: responseBody.status
                        }
                        localStorage.setItem('currentUser', JSON.stringify(retailer));
                        this.currentUserSubject.next(retailer);
                        return responseBody;
                    }
                }),
                catchError(err => err)
            )
    }
}

export interface ResponseUser {
    token: string;
    tokenType: string;
    isAuth: boolean;
    status: string;
}