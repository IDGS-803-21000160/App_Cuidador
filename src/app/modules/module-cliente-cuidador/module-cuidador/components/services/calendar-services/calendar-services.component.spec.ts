import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarServicesComponent } from './calendar-services.component';

describe('CalendarServicesComponent', () => {
  let component: CalendarServicesComponent;
  let fixture: ComponentFixture<CalendarServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
