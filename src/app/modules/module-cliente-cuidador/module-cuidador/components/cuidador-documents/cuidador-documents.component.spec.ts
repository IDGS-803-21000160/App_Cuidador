import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidadorDocumentsComponent } from './cuidador-documents.component';

describe('CuidadorDocumentsComponent', () => {
  let component: CuidadorDocumentsComponent;
  let fixture: ComponentFixture<CuidadorDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuidadorDocumentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuidadorDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
