import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidadorTabsComponent } from './cuidador-tabs.component';

describe('CuidadorTabsComponent', () => {
  let component: CuidadorTabsComponent;
  let fixture: ComponentFixture<CuidadorTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuidadorTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuidadorTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
