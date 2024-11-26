import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfTransaccionComponent } from './pdf-transaccion.component';

describe('PdfTransaccionComponent', () => {
  let component: PdfTransaccionComponent;
  let fixture: ComponentFixture<PdfTransaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfTransaccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfTransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
