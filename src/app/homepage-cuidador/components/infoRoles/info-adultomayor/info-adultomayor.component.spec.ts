import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAdultomayorComponent } from './info-adultomayor.component';

describe('InfoAdultomayorComponent', () => {
  let component: InfoAdultomayorComponent;
  let fixture: ComponentFixture<InfoAdultomayorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoAdultomayorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoAdultomayorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
