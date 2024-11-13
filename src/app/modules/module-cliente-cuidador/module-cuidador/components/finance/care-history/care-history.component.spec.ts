import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareHistoryComponent } from './care-history.component';

describe('CareHistoryComponent', () => {
  let component: CareHistoryComponent;
  let fixture: ComponentFixture<CareHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CareHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
