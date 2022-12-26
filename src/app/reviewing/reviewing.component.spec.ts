import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewingComponent } from './reviewing.component';

describe('ReviewingComponent', () => {
  let component: ReviewingComponent;
  let fixture: ComponentFixture<ReviewingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
