import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamAdultoComponent } from './fam-adulto.component';

describe('FamAdultoComponent', () => {
  let component: FamAdultoComponent;
  let fixture: ComponentFixture<FamAdultoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FamAdultoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamAdultoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
