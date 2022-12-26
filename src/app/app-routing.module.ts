import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgreementComponent } from './agreement/agreement.component';
import { ConfirmDetailsComponent } from './confirm-details/confirm-details.component';
import { DetailsComponent } from './details/details.component';
import { DocumentComponent } from './document/document.component';
import { LoadComponent } from './load/load.component';
import { OfferComponent } from './offer/offer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReviewingComponent } from './reviewing/reviewing.component';
import { WaitOfferComponent } from './wait-offer/wait-offer.component';

const routes: Routes = [
  { path: 'redirect/:id', component: LoadComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'confirm-details', component: ConfirmDetailsComponent },
  { path: 'calculating', component: WaitOfferComponent },
  { path: 'offer', component: OfferComponent },
  { path: 'document', component: DocumentComponent },
  { path: 'review', component: ReviewingComponent },
  { path: 'agreement', component: AgreementComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: "page-not-found" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
