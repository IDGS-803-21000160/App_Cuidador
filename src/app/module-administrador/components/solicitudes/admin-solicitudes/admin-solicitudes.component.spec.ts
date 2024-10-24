import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSolicitudesComponent } from './admin-solicitudes.component';

describe('AdminSolicitudesComponent', () => {
  let component: AdminSolicitudesComponent;
  let fixture: ComponentFixture<AdminSolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminSolicitudesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
