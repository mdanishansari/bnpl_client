import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.services';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {

  // token: string | null = '';
  retailerHexId: string = "";
  retailerId: number = 0;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.retailerHexId = this.route.snapshot.paramMap.get('id') || "";
    this.retailerId = parseInt(this.retailerHexId, 16);
    this.autoLoginSession();
  }

  autoLoginSession() {
    if (this.retailerId != 0) {
      this.authenticationService.login(this.retailerId)
        .subscribe(res => {
          if (res.status) {
            this.router.navigate([res.status]);
          }
        })
    }
  }

}
