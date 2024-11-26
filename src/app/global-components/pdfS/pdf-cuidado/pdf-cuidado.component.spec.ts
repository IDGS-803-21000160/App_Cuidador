import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfCuidadoComponent } from './pdf-cuidado.component';

describe('PdfCuidadoComponent', () => {
  let component: PdfCuidadoComponent;
  let fixture: ComponentFixture<PdfCuidadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfCuidadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfCuidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
