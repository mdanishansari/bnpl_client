import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthenticationService } from "./authentication.services";
import { HttpStatusCodeEnum } from "./status.enum";


@Injectable()

export class JwtAuthHeaderInterceptor implements HttpInterceptor {

    constructor(
        private authenticationService: AuthenticationService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = this.authenticationService.currentUserValue;
        console.log('currentUser',currentUser)
        if (currentUser !== null) {
            const token = currentUser.token;
            const tokentype = currentUser.tokenType;
            const checkAPI = req.url.startsWith(environment.apiUrl);
            if (token && checkAPI) {
                req = req.clone({
                    setHeaders: {
                        authorization: `${tokentype} ${currentUser.token}`
                    }
                })
            }
        }
        return next.handle(req)
            .pipe(
                tap((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        // console.log('event', event)
                    }
                },
                    (error: any) => {
                        if (error instanceof HttpErrorResponse) {
                            if (error.status === HttpStatusCodeEnum.UNAUTHORIZED) {
                                if (this.authenticationService.currentUserValue) {
                                    // this.authenticationService.logout();
                                    // this.router.navigate(['login'])
                                    // Swal.fire({
                                    //     icon: 'error',
                                    //     title: 'Authentication error..!',
                                    //     text: 'Authentication token/session has been expired.'
                                    // })
                                }
                            }
                        }
                    }
                ));
    }

}