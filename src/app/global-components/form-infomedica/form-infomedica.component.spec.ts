import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInfomedicaComponent } from './form-infomedica.component';

describe('FormInfomedicaComponent', () => {
  let component: FormInfomedicaComponent;
  let fixture: ComponentFixture<FormInfomedicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInfomedicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInfomedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
