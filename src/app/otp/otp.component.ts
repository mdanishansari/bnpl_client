import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  config = {
    allowNumbersOnly: true,
    length: 4
  }

  constructor(
    public dialogRef: MatDialogRef<OtpComponent>
  ) { }

  ngOnInit(): void {
  }

  onOtpChange(event: any) {
    var otpLength = this.config.length;
    if (otpLength == event.length) {
      this.closeDialog(event);
    }
  }

  closeDialog(otp: string) {
    this.dialogRef.close({ res: otp });
  }

}
