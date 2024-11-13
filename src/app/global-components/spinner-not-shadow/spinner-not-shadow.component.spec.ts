import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerNotShadowComponent } from './spinner-not-shadow.component';

describe('SpinnerNotShadowComponent', () => {
  let component: SpinnerNotShadowComponent;
  let fixture: ComponentFixture<SpinnerNotShadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinnerNotShadowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerNotShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
