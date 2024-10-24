import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFamilarComponent } from './form-familar.component';

describe('FormFamilarComponent', () => {
  let component: FormFamilarComponent;
  let fixture: ComponentFixture<FormFamilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormFamilarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFamilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
