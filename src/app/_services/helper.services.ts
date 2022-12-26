import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn: 'root'
})

export class HelperService {

    constructor(
        private _router: Router,
        private toastr: ToastrService,
    ) { }

    changeRouter(path: string) {
        this._router.navigate([path]);
    }

    warnToaster(message: string) {
        this.toastr.warning(message, 'Warning', {
            progressBar: true
        })
    }

    successToaster(message: string) {
        this.toastr.success(message, 'Success', {
            progressBar: true
        })
    }

    errorToaster(message: string) {
        this.toastr.error(message, 'Error', {
            progressBar: true
        })
    }

    clearToaster() {
        this.toastr.clear();
    }

}