import { TestBed } from '@angular/core/testing';

import { FinanceServicesService } from './finance-services.service';

describe('FinanceServicesService', () => {
  let service: FinanceServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinanceServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
