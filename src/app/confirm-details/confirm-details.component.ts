import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmRetailerDetails } from '../models/details.model';
import { AuthenticationService } from '../_services/authentication.services';
import { HelperService } from '../_services/helper.services';
import { RetailerService } from '../_services/retailer.services';

@Component({
  selector: 'app-confirm-details',
  templateUrl: './confirm-details.component.html',
  styleUrls: ['./confirm-details.component.css']
})
export class ConfirmDetailsComponent implements OnInit {
  isloading: boolean = true;
  loanCode: string = "";
  leadCode: string = "";

  cnfdetailsForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    dob: [null, Validators.required],
    gender: [null, Validators.required],
    address: [null, Validators.required],
    pan: [null, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private helperService: HelperService,
    private retailerService: RetailerService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.retailerService.getRetailerDetails().subscribe(res => {
      if (res.success) {
        this.cnfdetailsForm.patchValue(res.retailer)
        this.loanCode = res.retailer.loanCode;
        this.leadCode = res.retailer.leadCode;
        // this.authenticationService.updateCurrentUser(res.retailer.loanCode, res.retailer.leadCode);
      }
      this.isloading = false;
    })
  }

  onSubmit(): void {
    if (this.cnfdetailsForm.invalid) {
      this.helperService.warnToaster('Add required details')
      return;
    }
    this.isloading = true;
    var formvalues = this.cnfdetailsForm.value;
    var confirmRetailerDetails: ConfirmRetailerDetails = {
      firstName: formvalues.firstName || "",
      lastName: formvalues.lastName || "",
      dob: formvalues.dob || new Date,
      gender: formvalues.gender || "",
      address: formvalues.address || "",
      pan: formvalues.pan || "",
      leadCode: this.leadCode,
      loanCode: this.loanCode
    }
    this.retailerService.updateRetailerDetails(confirmRetailerDetails)
      .subscribe(res => {
        if (res.success && res.status != null) {
          this.authenticationService.updateCurrentUserstatus(res.status);
          this.helperService.changeRouter(res.status)
        }
      })
  }
}
