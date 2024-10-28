import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDocsComponent } from './tabla-docs.component';

describe('TablaDocsComponent', () => {
  let component: TablaDocsComponent;
  let fixture: ComponentFixture<TablaDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaDocsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
