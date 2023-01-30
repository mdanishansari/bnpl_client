import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn: 'root'
})

export class HelperService {

    constructor(
        private _router: Router,
        private _toastr: ToastrService,
        private _snackBar: MatSnackBar
    ) { }

    changeRouter(path: string) {
        this._router.navigate([path]);
    }

    warnToaster(message: string) {
        this._toastr.warning(message, 'Warning', {
            progressBar: true
        })
    }

    successToaster(message: string) {
        this._toastr.success(message, 'Success', {
            progressBar: true
        })
    }

    errorToaster(message: string) {
        this._toastr.error(message, 'Error', {
            progressBar: true
        })
    }

    clearToaster() {
        this._toastr.clear();
    }

    showSnackBar(message: string, action: string, duration: number) {
        this._snackBar.open(message, action, {
            duration: duration * 1000
        })
    }

}