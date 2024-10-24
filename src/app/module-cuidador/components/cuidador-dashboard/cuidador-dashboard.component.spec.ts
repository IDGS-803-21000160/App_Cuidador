import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidadorDashboardComponent } from './cuidador-dashboard.component';

describe('CuidadorDashboardComponent', () => {
  let component: CuidadorDashboardComponent;
  let fixture: ComponentFixture<CuidadorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuidadorDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuidadorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
