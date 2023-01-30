import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  amount: number = 0;
  creditMonths: number = 0;
  freeDays: number = 0;

  constructor() { }
  
  ngOnInit(): void {
  }

  offerAccepted() {

  }

}
