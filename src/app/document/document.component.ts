import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UploadOptionComponent } from '../upload-option/upload-option.component';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  status: string = 'pending';
  docType: string = 'none';
  fileUploaded: string = 'none';
  action: string = 'Close';

  constructor(
    private _docOptionBottomSheet: MatBottomSheet,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  openDocOptions() {
    const bottomSheet = this._docOptionBottomSheet.open(UploadOptionComponent);
    bottomSheet.afterDismissed().subscribe(res => {
      if (res) {
        this.docType = res;
      }
    })
  }

  onDocFileSelected(event: any) {
    var message = '';
    if (this.docType != 'none') {
      var maxSize = 1000000 * 10
      var selectedFile = event.target.files[0] ?? null;
      this.fileUploaded = selectedFile.name;
      var fileSize = selectedFile.size;
      if (fileSize > maxSize) {

      }
      // console.log(this.formatBytes(fileSize))
    }
    else {
      message = 'Select Doc Type';
      this._snackBar.open(message, this.action)
    }
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
