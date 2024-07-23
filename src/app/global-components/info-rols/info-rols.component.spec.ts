import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRolsComponent } from './info-rols.component';

describe('InfoRolsComponent', () => {
  let component: InfoRolsComponent;
  let fixture: ComponentFixture<InfoRolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoRolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoRolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
