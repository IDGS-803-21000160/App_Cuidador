import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableReportingComponent } from './table-reporting.component';

describe('TableReportingComponent', () => {
  let component: TableReportingComponent;
  let fixture: ComponentFixture<TableReportingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableReportingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
