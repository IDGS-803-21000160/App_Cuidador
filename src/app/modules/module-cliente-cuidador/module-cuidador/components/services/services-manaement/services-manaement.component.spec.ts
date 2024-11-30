import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesManaementComponent } from './services-manaement.component';

describe('ServicesManaementComponent', () => {
  let component: ServicesManaementComponent;
  let fixture: ComponentFixture<ServicesManaementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesManaementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesManaementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
