import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UploadOptionComponent } from '../upload-option/upload-option.component';
import { HelperService } from '../_services/helper.services';
import { RetailerService } from '../_services/retailer.services';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  docStatus: string = '';
  gstStatus: string = '';
  docType: string = '';
  fileUploaded: string = 'none';
  action: string = 'Close';
  isLoading: boolean = true;

  constructor(
    private _docOptionBottomSheet: MatBottomSheet,
    private helperService: HelperService,
    private retailerService: RetailerService
  ) { }

  ngOnInit(): void {
    this.updateStatus();
  }

  openDocOptions() {
    const bottomSheet = this._docOptionBottomSheet.open(UploadOptionComponent);
    bottomSheet.afterDismissed().subscribe(res => {
      if (res) {
        this.docType = res;
      }
    })
  }

  onDocFileSelected(event: any, path: string) {
    var message = '';
    if (this.docType != 'none') {
      var maxSize = 1000000 * 10
      var selectedFile = event.target.files[0] ?? null;
      this.fileUploaded = selectedFile.name;
      var fileSize = selectedFile.size;
      if (fileSize < maxSize && selectedFile != null) {
        var fd = new FormData();
        fd.append("type", this.docType)
        fd.append("path", path)
        fd.append("document", selectedFile)
        this.retailerService.uploadDocuments(fd).subscribe(res => {
          if (res.success) {
            this.helperService.showSnackBar(res.message, this.action, 2)
            this.updateStatus();
          }
        })
      }
      // console.log(this.formatBytes(fileSize))
    }
    else {
      message = 'Select Doc Type';
      this.helperService.showSnackBar(message, this.action, 2)
    }
  }

  updateStatus() {
    this.retailerService.getRetailerDetails().subscribe(res => {
      if (res.success) {
        this.docStatus = res.retailer.docValue;
        this.gstStatus = res.retailer.gstValue;
        this.docType = res.retailer.docType;
        if (this.docStatus != 'pending' && this.gstStatus != 'pending') {
          this.isLoading = false;
        }
      }
    })
  }

  docUploaded() {

  }

  formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return (
      parseFloat((bytes / Math.pow(k, i)).toFixed(dm))
    );
  }

}
