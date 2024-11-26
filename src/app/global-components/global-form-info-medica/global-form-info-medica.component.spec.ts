import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalFormInfoMedicaComponent } from './global-form-info-medica.component';

describe('GlobalFormInfoMedicaComponent', () => {
  let component: GlobalFormInfoMedicaComponent;
  let fixture: ComponentFixture<GlobalFormInfoMedicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalFormInfoMedicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalFormInfoMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
