import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-status',
  templateUrl: './progress-status.component.html',
  styleUrls: ['./progress-status.component.css']
})
export class ProgressStatusComponent implements OnInit {
  @Input() progress: string = '0';
  @Input() nextStep: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
