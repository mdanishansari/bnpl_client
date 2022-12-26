import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-details',
  templateUrl: './confirm-details.component.html',
  styleUrls: ['./confirm-details.component.css']
})
export class ConfirmDetailsComponent implements OnInit {
  cnfdetailsForm = this.fb.group({
    fullName: [null, Validators.required],
    dob: [null, Validators.required],
    gender: [null, Validators.required],
    address: [null, Validators.required],
    pan: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this._router.navigate(['calculating']);
  }
}
