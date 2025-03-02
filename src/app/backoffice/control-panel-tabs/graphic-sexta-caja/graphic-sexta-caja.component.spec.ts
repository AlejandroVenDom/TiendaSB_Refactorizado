import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicSextaCajaComponent } from './graphic-sexta-caja.component';

describe('GraphicSextaCajaComponent', () => {
  let component: GraphicSextaCajaComponent;
  let fixture: ComponentFixture<GraphicSextaCajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicSextaCajaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicSextaCajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
