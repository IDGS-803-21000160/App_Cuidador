import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultoMayorTabsComponent } from './adulto-mayor-tabs.component';

describe('AdultoMayorTabsComponent', () => {
  let component: AdultoMayorTabsComponent;
  let fixture: ComponentFixture<AdultoMayorTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdultoMayorTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdultoMayorTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
