import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadOptionComponent } from './upload-option.component';

describe('UploadOptionComponent', () => {
  let component: UploadOptionComponent;
  let fixture: ComponentFixture<UploadOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
