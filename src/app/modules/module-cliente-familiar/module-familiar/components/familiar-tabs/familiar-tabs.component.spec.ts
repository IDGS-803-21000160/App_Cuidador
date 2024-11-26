import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliarTabsComponent } from './familiar-tabs.component';

describe('FamiliarTabsComponent', () => {
  let component: FamiliarTabsComponent;
  let fixture: ComponentFixture<FamiliarTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FamiliarTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamiliarTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
