import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitOfferComponent } from './wait-offer.component';

describe('WaitOfferComponent', () => {
  let component: WaitOfferComponent;
  let fixture: ComponentFixture<WaitOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaitOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
