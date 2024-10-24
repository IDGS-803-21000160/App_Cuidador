import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInfopersonalComponent } from './form-infopersonal.component';

describe('FormInfopersonalComponent', () => {
  let component: FormInfopersonalComponent;
  let fixture: ComponentFixture<FormInfopersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInfopersonalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInfopersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
