import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCuidadorComponent } from './form-cuidador.component';

describe('FormCuidadorComponent', () => {
  let component: FormCuidadorComponent;
  let fixture: ComponentFixture<FormCuidadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCuidadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCuidadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
