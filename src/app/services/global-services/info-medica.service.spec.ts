import { TestBed } from '@angular/core/testing';

import { InfoMedicaService } from './info-medica.service';

describe('InfoMedicaService', () => {
  let service: InfoMedicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoMedicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
