import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationHandlerComponent } from './reservation-handler.component';

describe('ReservationHandlerComponent', () => {
  let component: ReservationHandlerComponent;
  let fixture: ComponentFixture<ReservationHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationHandlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
