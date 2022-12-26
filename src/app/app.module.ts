import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { DetailsComponent } from './details/details.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProgressStatusComponent } from './progress-status/progress-status.component';
import { ConfirmDetailsComponent } from './confirm-details/confirm-details.component';
import { WaitOfferComponent } from './wait-offer/wait-offer.component';
import { LoadComponent } from './load/load.component';
import { OfferComponent } from './offer/offer.component';
import { DocumentComponent } from './document/document.component';
import { UploadOptionComponent } from './upload-option/upload-option.component';
import { ReviewingComponent } from './reviewing/reviewing.component';
import { AgreementComponent } from './agreement/agreement.component';
import { ToastrModule } from 'ngx-toastr';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JwtAuthHeaderInterceptor } from './_services/jwt-auth-header.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    ProgressStatusComponent,
    ConfirmDetailsComponent,
    WaitOfferComponent,
    LoadComponent,
    OfferComponent,
    DocumentComponent,
    UploadOptionComponent,
    ReviewingComponent,
    AgreementComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBottomSheetModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatSliderModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({ positionClass: 'toast-top-center' }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtAuthHeaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
