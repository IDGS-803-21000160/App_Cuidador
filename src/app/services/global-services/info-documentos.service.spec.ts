import { TestBed } from '@angular/core/testing';

import { InfoDocumentosService } from './info-documentos.service';

describe('InfoDocumentosService', () => {
  let service: InfoDocumentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoDocumentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
