import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsBackofficeComponent } from './products-backoffice.component';

describe('ProductsBackofficeComponent', () => {
  let component: ProductsBackofficeComponent;
  let fixture: ComponentFixture<ProductsBackofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsBackofficeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsBackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
