import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutPayPalComponent } from './check-out-pay-pal.component';

describe('CheckOutPayPalComponent', () => {
  let component: CheckOutPayPalComponent;
  let fixture: ComponentFixture<CheckOutPayPalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckOutPayPalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckOutPayPalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
