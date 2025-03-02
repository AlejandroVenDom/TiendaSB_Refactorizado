import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNotificatinComponent } from './tab-notificatin.component';

describe('TabNotificatinComponent', () => {
  let component: TabNotificatinComponent;
  let fixture: ComponentFixture<TabNotificatinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabNotificatinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabNotificatinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
