import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalFormDocumentosComponent } from './global-form-documentos.component';

describe('GlobalFormDocumentosComponent', () => {
  let component: GlobalFormDocumentosComponent;
  let fixture: ComponentFixture<GlobalFormDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalFormDocumentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalFormDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
