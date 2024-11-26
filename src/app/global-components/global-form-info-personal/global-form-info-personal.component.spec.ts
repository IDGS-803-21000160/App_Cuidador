import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalFormInfoPersonalComponent } from './global-form-info-personal.component';

describe('GlobalFormInfoPersonalComponent', () => {
  let component: GlobalFormInfoPersonalComponent;
  let fixture: ComponentFixture<GlobalFormInfoPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalFormInfoPersonalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalFormInfoPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
