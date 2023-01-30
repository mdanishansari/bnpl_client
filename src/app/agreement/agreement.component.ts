import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OtpComponent } from '../otp/otp.component';
import { AuthenticationService } from '../_services/authentication.services';
import { RetailerService } from '../_services/retailer.services';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.css']
})
export class AgreementComponent implements OnInit {
  loanCode: string = '';
  leadCode: string = '';
  mobile: string = '';
  otp: string = '';
  constructor(
    private retailerService: RetailerService,
    private authenticationService: AuthenticationService,
    public dialog: MatDialog
  ) {
    this.retailerService.getRetailerDetails().subscribe(res => {
      if (res.success) {
        console.log(res)
        this.leadCode = res.retailer.leadCode;
        this.loanCode = res.retailer.loanCode;
        this.mobile = res.retailer;
      }
    })
  }

  ngOnInit(): void {
    this.retailerService.fetchDocuments(this.loanCode)
      .subscribe(res => {
        if (res.success) {

        }
      })
  }

  initiateAgreement() {
    this.retailerService.initiateAgreement(this.mobile, this.loanCode)
      .subscribe(res => {
        if (res.success) {
          this.openOtpDialog();
        }
      })
  }

  openOtpDialog() {
    const otpCom = this.dialog.open(OtpComponent, {
      disableClose: true
    })
    otpCom.afterClosed().subscribe(result => {
      if (result) {
        this.otp = result.otp;
      }
    })
  }



}
