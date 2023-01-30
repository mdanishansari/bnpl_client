import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RetailerDetails } from '../models/details.model';
import { HelperService } from '../_services/helper.services';
import { RetailerService } from '../_services/retailer.services';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  max: number = 100000;
  min: number = 0;
  step: number = 1000;
  value: number | null = 0;
  isloading: boolean = false;

  detailsForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    mobile: [null, Validators.required],
    dob: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    gender: [null, Validators.required],
    address: [null, Validators.required],
    pan: [null, Validators.required],
    aadhaar: [null, Validators.required],
    city: [null, Validators.required],
    state: [null, Validators.required],
    pincode: [null, Validators.required],
    consent: [null, Validators.required],
    // amount: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private helperService: HelperService,
    private retailerService: RetailerService
  ) { }

  onSubmit(): void {
    var valid = this.checkFormValidation();
    if (valid) {

      this.isloading = true;
      var formvalues = this.detailsForm.value;
      if (!this.detailsForm.invalid) {
        var retailerDetails: RetailerDetails = {
          firstName: formvalues.firstName || "",
          lastName: formvalues.lastName || "",
          mobile: formvalues.mobile || 0,
          dob: formvalues.dob || new Date,
          email: formvalues.email || "",
          gender: formvalues.gender || "",
          address: formvalues.address || "",
          pan: formvalues.pan || "",
          aadhaar: formvalues.aadhaar || "",
          city: formvalues.city || "",
          state: formvalues.state || "",
          pincode: formvalues.pincode || 0,
          consent: formvalues.consent || false
        }
        this.retailerService.createRetailerDetails(retailerDetails)
          .subscribe(res => {
            if (res.success && res.status != null) {
              this.isloading = false;
              this.helperService.changeRouter(res.status)
            }
          })
      }
    }
  }

  checkFormValidation() {
    let message = null;
    var result = true;
    if (!this.detailsForm.controls['consent'].value) {
      message = "User consent is required";
    }
    else if (this.detailsForm.invalid) {
      message = "Add required details";
    }

    if (message !== null) {
      this.helperService.warnToaster(message || "");
      return result = false;
    }
    return result;
  }
}

