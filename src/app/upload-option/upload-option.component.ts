import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-upload-option',
  templateUrl: './upload-option.component.html',
  styleUrls: ['./upload-option.component.css']
})
export class UploadOptionComponent implements OnInit {

  typesOfDoc: string[] = ['Aadhaar', 'VoterId', 'DL', 'Passport', 'Other'];

  constructor(private _bottomSheetRef: MatBottomSheetRef<UploadOptionComponent>) { }

  ngOnInit(): void {
  }

  selection(docType: any) {
    this._bottomSheetRef.dismiss(docType)
  }

}
